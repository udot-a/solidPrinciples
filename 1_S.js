//Single Responsibility Principle

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }

    toHTML() {
    }

    toJSON() {
    }
}

class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        const { title, text } = this.news;
        return `
            <div class="news">
                <h1>${title}</h1>

                <p>${text}</p>
            </div>
        `
    }

    json() {
        const { title, text, modified } = this.news;

        return JSON.stringify({
            title,
            text,
            modified
        }, null, 2)

    }
}

const printer = new NewsPrinter(new News("Зеленский обещал", "Вернуть заробитчан ..."));

console.log(printer.html());
console.log(printer.json());
