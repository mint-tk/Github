const url = "https://jsonplaceholder.typicode.com/posts/1";

async function loadData() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("失敗");
        const data = await res.json();
        console.log(data.title);
        const result = document.querySelector("#result");
        result.textContent = data.title;
    } catch (e) {
        console.log(e);
    }
}

loadData();
