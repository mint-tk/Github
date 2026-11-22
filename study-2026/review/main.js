const url = "https://jsonplaceholder.typicode.com/posts/1";

async function loadData() {
    try {
        const res = await fetch(url); // URLのデータを取りに行く
        if (!res.ok) throw new Error("失敗"); // 失敗したらエラーにする
        const data = await res.json(); // 届いた箱を開けて、JSで使える形にする
        console.log(data.title); // タイトルをConsoleに表示
        const result = document.querySelector("#result"); // id="result" の要素を探す
        result.textContent = data.title; // 画面の文字をタイトルに書きかえる
    } catch (e) {
        console.log(e);
    }
}

loadData();
