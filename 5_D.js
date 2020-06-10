// Dependency inversion principle

class Fetch {
    request(url) {
       // return fetch(url).then(r => r.json());

        return  Promise.resolve("Data from fetch...")
    }
}

class LocalStorage {
    get() {
        const dataFromLS = "Data from Local Storage.";

        return dataFromLS;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet() {
        return this.fetch.request("https://jsonplaceholder.typicode.com/todos/1");
    }
}

class LSClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet() {
        return this.localStorage.get();
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData() {
        return this.client.clientGet()
    }
}

const db = new Database(new LSClient());
const db2 = new Database(new FetchClient());
console.log(db.getData());
console.log(db2.getData());