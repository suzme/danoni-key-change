'use strict'
/**
 * キー数強制変換 & DoubleBattleモード
 * URLパラメータで設定します。
 * (例)
 * key=7p  7pkeyにする
 * key=11f 11fkeyにする
 * double=on 5key/12keyの場合、譜面をコピーして9Akey/23keyにする
 * double=mirror 片方をミラーにする
 * double=mirrorplus 運指が対称になるようにミラーにする
 */
{
  const urlObj = new URL(document.location)

  // 矢印名→フリーズ名変換
  const getFrzName = name => {
    const fname = replaceStr(name, g_escapeStr.frzName)
    if (fname.match(/frz|foni/)) {
      return fname
    } else {
      return 'frz' + fname.charAt(0).toUpperCase() + fname.slice(1)
    }
  }

  // --------------------------------------------------------------------------
  // キー数強制変換
  // --------------------------------------------------------------------------
  const key = urlObj.searchParams.get('key')
  const originalKeyLabels = [] // キー数変換前のキー

  if (key) {
    const keyLabel = key.replace(/\W/g, '')
    g_rootObj.difData = g_rootObj.difData.split('$').map(difData => {
      const difDataArray = difData.split(',')
      originalKeyLabels.push(difDataArray[0])
      difDataArray[0] = keyLabel
      return difDataArray.join(',')
    }).join('$')

    // ------------------------------------------------------------------------
    // 以降は特殊キー(9t,18p,27k,47k)用の処理
    // ------------------------------------------------------------------------

    // フリーズ→通常ノート化
    const freezeToArrow = (originalKey, i) => {
      const suffix = i > 0 ? i + 1 : ''
      g_keyObj[`chara${originalKey}_0`].forEach(chara => {
        let notes = []
        if (g_rootObj[`${chara}${suffix}_data`]) {
          notes.push(...g_rootObj[`${chara}${suffix}_data`].split(','))
        }
        if (g_rootObj[`${getFrzName(chara)}${suffix}_data`]) {
          notes.push(...g_rootObj[`${getFrzName(chara)}${suffix}_data`].split(',').filter((value, i) => i % 2 === 0))
        }
        notes = notes.map(f => parseFloat(f))
        notes.sort((a, b) => a - b)
        g_rootObj[`${chara}${suffix}_data`] = notes.join(',')
        g_rootObj[`${getFrzName(chara)}${suffix}_data`] = ''
      })
    }

    // 9tkey
    if (keyLabel === '9t') {
      // スクリプトとCSSの読み込み
      loadScript2(C_DIR_JS + 'danoni_custom_9t.js')
      importCssFile2(C_DIR_CSS + '9tkey.css')

      // 9tkey用の設定
      g_rootObj.motionUse = 'false'
      g_rootObj.arrowMotion_data = '0,20,arrow9t,arrow9t-rev\n0,21,arrow9t,arrow9t-rev\n0,22,arrow9t,arrow9t-rev\n0,23,arrow9t,arrow9t-rev\n0,24,arrow9t,arrow9t-rev'

      // フリーズ除去
      originalKeyLabels.forEach(freezeToArrow)

      // 開始時に再読み込みがかかるので再度フリーズ除去
      g_customJsObj.preloading.push(() => originalKeyLabels.forEach(freezeToArrow))
    }

    // 17key→パンパネ
    if (keyLabel === '18p') {
      // スクリプトとCSSの読み込み
      loadScript2(C_DIR_JS + 'pstyle.js')
      importCssFile2(C_DIR_CSS + 'pstyle.css')

      // 各種設定
      g_rootObj.imgType = 'panels,svg,true,0';
      g_rootObj.arrowJdgY = -160;
      g_rootObj.motionUse = 'false'
      g_rootObj.appearanceUse = 'false'

      // 配色をパンパネ用にする
      g_rootObj.setColor = '0x9999ff,0xccffff,0xffffff,0xffff99,0xff9966'

      // 変数名を17key用にする
      g_keyObj.chara18p_0 = ['aright','bright','space','cright','dright','aup','bup','cup','dup','adown','bdown','cdown','ddown','aleft','bleft','oni','cleft','dleft']
      g_keyObj.chara18p_1 = ['aright','bright','space','cright','dright','aup','bup','cup','dup','adown','bdown','cdown','ddown','aleft','bleft','oni','cleft','dleft']

      g_customJsObj.option.push(() => {
        g_keyObj.chara18p_0 = ['aright','bright','space','cright','dright','aup','bup','cup','dup','adown','bdown','cdown','ddown','aleft','bleft','oni','cleft','dleft']
        g_keyObj.chara18p_1 = ['aright','bright','space','cright','dright','aup','bup','cup','dup','adown','bdown','cdown','ddown','aleft','bleft','oni','cleft','dleft']
        g_keyObj['chara18p_-1'] = ['aright','bright','space','cright','dright','aup','bup','cup','dup','adown','bdown','cdown','ddown','aleft','bleft','oni','cleft','dleft']
      })

      // フリーズ除去
      originalKeyLabels.forEach(freezeToArrow)

      // 開始時に再読み込みがかかるので再度フリーズ除去
      g_customJsObj.preloading.push(() => originalKeyLabels.forEach(freezeToArrow))
    }

    // キリズマ
    if (keyLabel === '27k' || keyLabel === '47k') {
      // スクリプトとCSSの読み込み
      loadScript2(C_DIR_JS + 'kstyle.js')
      importCssFile2(C_DIR_CSS + 'kstyle.css')

      // 読み込みタイミングの問題で初期化処理が走らないことの対策
      let kirizmaInitFlag = false
      g_customJsObj.titleEnterFrame.push(() => {
        if (!kirizmaInitFlag && typeof kstylePreTitleInit === 'function') {
          kstylePreTitleInit()
          kstyleTitleInit()
          kirizmaInitFlag = true
        }
      })

      // 各種設定
      g_rootObj.imgType = 'kirizma,svg,true,0'
      g_rootObj.specialUse = 'true,OFF'
      g_rootObj.setColor = '0xffffff,0xff6633,0xffffff,0xff6633'
      g_settings.shuffles = [C_FLG_OFF, 'S-Random', 'S-Random+']

      // 譜面データをキリズマ用に変換する
      const convertKirizma = (originalKey, i) => {
        // 全ノートを1個の配列に入れる
        let notes = []
        const suffix = i > 0 ? i + 1 : ''
        g_keyObj[`chara${originalKey}_0`].forEach(chara => {
            if (g_rootObj[`${chara}${suffix}_data`]) {
              notes.push(...g_rootObj[`${chara}${suffix}_data`].split(','))
            }
            if (g_rootObj[`${getFrzName(chara)}${suffix}_data`]) {
              notes.push(...g_rootObj[`${getFrzName(chara)}${suffix}_data`].split(',').filter((value, i) => i % 2 === 0))
            }
        })
        notes = notes.map(f => parseFloat(f))
        notes.sort((a, b) => a - b)
        g_rootObj[`keyC${suffix}_data`] = [...new Set(notes)].join(',') // 同時押しを排除して全部Cにする
        g_rootObj[`space${suffix}_data`] = ''
        g_rootObj[`frzSpace${suffix}_data`] = ''
      }

      // 初回処理
      originalKeyLabels.forEach(convertKirizma)

      // 開始時に再読み込みがかかるので再度変換実行
      g_customJsObj.preloading.push(() => originalKeyLabels.forEach(convertKirizma))
    }
  }

  // --------------------------------------------------------------------------
  // DoubleBattleモード
  // --------------------------------------------------------------------------
  const double = urlObj.searchParams.get('double')
  const singleKeyLabels = [] // キー数変換後、Double化前のキー

  if (double) {
    let suffix // 難易度名の後ろに付けるやつ
    if (double === 'on' || double === 'true' || double === '1') suffix = '倍'
    if (double === 'mirror') suffix = '倍鏡'
    if (double === 'mirrorplus') suffix = '倍鏡+'

    if (suffix) {
      g_rootObj.difData = g_rootObj.difData.split('$').map(difData => {
        const difDataArray = difData.split(',')

        // キー数変更
        if (difDataArray[0] === '5') {
          difDataArray[0] = '9A'
        } else if (difDataArray[0] === '12') {
          difDataArray[0] = '23'
        }

        // 難易度名に(倍)などを付加
        difDataArray[1] += `(${suffix})`
        singleKeyLabels.push(difDataArray[0])
        return difDataArray
      }).join('$')
    }

    // Double化メイン処理
    const doubleBattle = () => {
      // 変換パターンの定義
      let convertPattern = {}
      if (double === 'on' || double === 'true' || double === '1') {
        convertPattern = {
          '9A': {
            'before': 'left,down,up,right,space,left,down,up,right'.split(','),
            'after': g_keyObj.chara9A_0
          },
          '23': {
            'before': 'sleft,sdown,sup,sright,sleft,sdown,sup,sright,left,leftdia,down,space,up,rightdia,right,oni,left,leftdia,down,space,up,rightdia,right'.split(','),
            'after': g_keyObj.chara23_0,
          }
        }
      } else if (double === 'mirror') {
        convertPattern = {
          '9A': {
            'before': 'right,up,down,left,space,left,down,up,right'.split(','),
            'after': g_keyObj.chara9A_0
          },
          '23': {
            'before': 'sright,sup,sdown,sleft,sleft,sdown,sup,sright,right,rightdia,up,space,down,leftdia,left,oni,left,leftdia,down,space,up,rightdia,right'.split(','),
            'after': g_keyObj.chara23_0,
          }
        }
      } else if (double === 'mirrorplus') {
        convertPattern = {
          '9A': {
            'before': 'right,down,up,left,space,left,down,up,right'.split(','),
            'after': g_keyObj.chara9A_0
          },
          '23': {
            'before': 'sright,sdown,sup,sleft,sleft,sdown,sup,sright,right,rightdia,up,space,down,leftdia,left,oni,left,leftdia,down,space,up,rightdia,right'.split(','),
            'after': g_keyObj.chara23_0,
          }
        }
      }

      // 譜面データのコピー
      singleKeyLabels.forEach((key, i) => {
        if (convertPattern[key]) {
          const suffix = i > 0 ? i + 1 : ''

          // 通常矢
          const notes = convertPattern[key].before.map(chara => g_rootObj[`${chara}${suffix}_data`])
          convertPattern[key].after.forEach((chara, j) => {
            g_rootObj[`${chara}${suffix}_data`] = notes[j]
          })

          // 氷矢
          const frzs = convertPattern[key].before.map(chara => g_rootObj[`${getFrzName(chara)}${suffix}_data`])
          convertPattern[key].after.map(name => getFrzName(name)).forEach((chara, j) => {
            g_rootObj[`${chara}${suffix}_data`] = frzs[j]
          })
        }
      })
    }

    // 12key LeggendariaのDoubleがバグる対策
    // 12keyの変数名は23keyの片側と同じではないので再読み込みで上書きされないので、消す必要がある
    const cleanUpDouble = () => {
      singleKeyLabels.forEach((key, i) => {
        if (key === '23') {
          g_keyObj.chara23_0.forEach(chara => {
            const suffix = i > 0 ? i + 1 : ''
            g_rootObj[`${chara}${suffix}_data`] = ''
            g_rootObj[`${getFrzName(chara)}${suffix}_data`] = ''
          })
        }
      })
    }

    // 初回処理
    doubleBattle()
    g_customJsObj.preTitle.push(cleanUpDouble)
  
    // 開始時に再読み込みがかかるので再度実行
    g_customJsObj.preloading.push(doubleBattle)
    g_customJsObj.loading.push(cleanUpDouble)
  }
}
