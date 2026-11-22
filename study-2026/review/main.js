const url = "https://jsonplaceholder.typicode.com/posts/1";

async function loadData() {
    try {
        const res = await fetch(url);         // ここに説明　URLデータを取りに行く
        if (!res.ok) throw new Error("失敗");  // ここに説明　失敗したら　失敗と表示
        const data = await res.json();          // ここに説明 ？
        console.log(data.title);                // ここに説明　データのタイトルを表示
        const result = document.querySelector("#result");
        result.innerHTML = data.title;
    } catch (e) {
        console.log(e);                         // ここに説明　表示
    }
}

loadData();