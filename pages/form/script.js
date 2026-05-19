async function handleSubmit(e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;

    console.log(title, body)
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body }),
        });

        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        console.log("Response:", data);
        alert(`Post created! ID: ${data.id}`);
    } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
    }
}