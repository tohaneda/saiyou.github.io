// ボタンとセレクトボックスの要素を取得
const shareButton = document.getElementById('webShareButton');
const sharePatternSelect = document.getElementById('sharePattern');

// URLパラメータを取得
const urlParams = new URLSearchParams(window.location.search);
const paramsString = urlParams.toString();

// シェアするURLを生成
const url = "https://asuna4993.github.io/ASuna4993/index.html" + (paramsString ? `?${paramsString}` : '');

// クリックイベントを設定
shareButton.addEventListener('click', async () => {
    // 現在選択されている文言を取得
    const selectedPattern = sharePatternSelect.value;
    const messageElement = document.querySelector(`#shareMessages [data-pattern="${selectedPattern}"]`);
    const text = messageElement ? messageElement.textContent.trim() : '';

    try {
        await navigator.share({
            title: document.title,  // タイトル
            text: text,             // 選択された文言
            url: url                // シェアURL
        });
        console.log('シェア成功！');
    } catch (error) {
        console.error('シェア失敗', error);
    }
});
