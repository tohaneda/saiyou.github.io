// URLパラメータを取得
const urlParams = new URLSearchParams(window.location.search);
const paramsString = urlParams.toString();

// シェアするURLを生成
const url = "https://asuna4993.github.io/ASuna4993/index.html" + (paramsString ? `?${paramsString}` : '');

// 全てのシェアボタンを取得
const shareButtons = document.querySelectorAll('.share-button');

// 各ボタンにクリックイベントを設定
shareButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const pattern = button.getAttribute('data-pattern'); // ボタンのデータ属性からパターンを取得
        const messageElement = document.querySelector(`#shareMessages [data-pattern="${pattern}"]`);
        const text = messageElement ? messageElement.textContent.trim() : '';

        try {
            await navigator.share({
                text: `${document.title}\n${text}`,
                url: url
            });
            console.log(`シェア成功: ${pattern}`);
        } catch (error) {
            console.error(`シェア失敗 (${pattern}):`, error);
        }
    });
});
