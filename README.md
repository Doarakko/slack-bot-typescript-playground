# typescript-slack-bot-playground

## Requirements

- npm
- Slack

## Usage

### 1. Prepare source code.

Fork [this](https://github.com/Doarakko/typescript-slack-bot-playground) repository.

```sh
git clone https://github.com/<id>/typescript-slack-bot-playground
```

### 2. Create Slack App using `manifest.yml`.

Go to [here](https://api.slack.com/apps) and create from an app manifest.

Get App-Level Token(xapp-aaaa) with connections:write and Bot User OAuth Token(xoxb-bbbb).

### 3. Edit `.env`.

```sh
cp .env.example .env
```

Enter SLACK_APP_TOKEN and SLACK_BOT_TOKEN.

### 4. Install library

```sh
npm install
```

### 5. Run

```sh
npm run dev
```
