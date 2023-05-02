const app = document.querySelector('#app');
const loading = document.querySelector('.loading');

const CallApi = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            json.map((post) => {
                app.innerHTML += `
                    <section class="bg-white w-3/12 border border-black p-5 m-4 rounded-xl shadow-lg flex flex-col relative">
                        <small class="rounded-full bg-gray-300 p-2 w-max">Number - ${post.id}</small>
                        <h1 class="text-2xl font-medium text-black">${post.title}</h1>
                        <p class="text-slate-500">${post.body}</p>
                    </section>
                 `
            });
        });

    loading.classList.add('dismis');
};


CallApi();