# apis-lookup-bot

> API Bot for searching APIs hosted on APInf.

### Screenshots

- [Telegram](https://github.com/apinf/apis-lookup-bot/blob/master/screenshots/telegram.png)

- [CLI](https://github.com/apinf/apis-lookup-bot/blob/master/screenshots/cli.png)

### Ideas

As current implementation involves only APIs search by keyword, there is a suggestion to extend the functionality by adding a possibility to request API analytics for selected API or a number of APIs.

This can be achieved by using [chartjs-node](https://github.com/vmpowerio/chartjs-node) on server-side to "render" chart showing API responses over time, save chart image to a file and pass it to a bot.

### Setup

1. Initial setup

  ```bash
  # Clone repo
  $ git clone https://github.com/apinf/apis-lookup-bot.git

  # Install dependencies
  $ npm install

  # Rename example.config.js to config.js
  $ mv example.config.js config.js
  ```

2. Update `config.js` with needed credentials

3. Run it with `npm start`


### Build

```bash
$ npm run build
```

### LICENSE

[EUPL-1.1](https://github.com/apinf/apis-lookup-bot/blob/master/LICENSE)
