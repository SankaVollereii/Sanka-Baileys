# <div align='center'>Baileys - Typescript/Javascript WhatsApp Web API</div>

<div align="center"><img src="https://files.catbox.moe/ibob7z.png"></div>

### Important Note

This library was originally a project for **CS-2362 at Ashoka University** and is in no way affiliated with or endorsed by WhatsApp. Use at your own discretion. Do not spam people with this. We discourage any stalkerware, bulk or automated messaging usage. 

#### Liability and License Notice
Baileys and its maintainers cannot be held liable for misuse of this application, as stated in the [MIT license](https://github.com/WhiskeySockets/Baileys/blob/master/LICENSE).
The maintainers of Baileys do not in any way condone the use of this application in practices that violate the Terms of Service of WhatsApp. The maintainers of this application call upon the personal responsibility of its users to use this application in a fair way, as it is intended to be used.
##

Baileys does not require Selenium or any other browser to be interface with WhatsApp Web, it does so directly using a **WebSocket**. 
Not running Selenium or Chromimum saves you like **half a gig** of ram :/ 
Baileys supports interacting with the multi-device & web versions of WhatsApp.
Thank you to [@pokearaujo](https://github.com/pokearaujo/multidevice) for writing his observations on the workings of WhatsApp Multi-Device. Also, thank you to [@Sigalor](https://github.com/sigalor/whatsapp-web-reveng) for writing his observations on the workings of WhatsApp Web and thanks to [@Rhymen](https://github.com/Rhymen/go-whatsapp/) for the __go__ implementation.
 
## Please Read

The original repository had to be removed by the original author - we now continue development in this repository here.
This is the only official repository and is maintained by the community.
 **Join the Discord [here](https://discord.gg/WeJM5FP9GG)**
 
## Example

Do check out & run [example.ts](Example/example.ts) to see an example usage of the library.
The script covers most common use cases.
To run the example script, download or clone the repo and then type the following in a terminal:
1. ``` cd path/to/Baileys ```
2. ``` yarn ```
3. ``` yarn example ```

## Install

Install in package.json:
```json
"dependencies": {
    "@whiskeySockets/baileys": "github:SankaVollereii/Sanka-Baileys"
}
```
or install in terminal:
```
npm install @whiskeySockets/baileys@github:SankaVollereii/Sanka-Baileys
```

Then import the default function in your code:
```ts 
// type esm
import makeWASocket from '@whiskeySockets/baileys'
```

```js
// type cjs
const { default: makeWASocket } = require("@whiskeySockets/baileys")
```

## Added Features and Improvements
Here are some of the features and improvements I have added:

- **Support for Sending Messages to Channels**: You can now easily send messages to channels.

- **Support for Button Messages and Interactive Messages**: Added the ability to send messages with buttons and interactive messages.

- **AI Message Icon**: Added customizable AI icon settings for messages

- **Profile Picture Settings**: Allows users to upload profile pictures in their original size without cropping, ensuring better quality and visual presentation.

- **Custom Pairing Code**: Users can now create and customize pairing codes as they wish, enhancing convenience and security when connecting devices.

- **Libsignal Fixes**: Cleaned up logs for a cleaner and more informative output.

More features and improvements will be added in the future.

## Feature Examples

### NEWSLETTER

- **To get info newsletter**
``` ts
const metadata = await conn.newsletterMetadata("invite", "xxxxx")
// or
const metadata = await conn.newsletterMetadata("jid", "abcd@newsletter")
console.log(metadata)
```
- **To update the description of a newsletter**
``` ts
await conn.newsletterUpdateDescription("abcd@newsletter", "New Description")
```
- **To update the name of a newsletter**
``` ts
await conn.newsletterUpdateName("abcd@newsletter", "New Name")
```  
- **To update the profile picture of a newsletter**
``` ts
await conn.newsletterUpdatePicture("abcd@newsletter", buffer)
```
- **To remove the profile picture of a newsletter**
``` ts
await conn.newsletterRemovePicture("abcd@newsletter")
```
- **To mute notifications for a newsletter**
``` ts
await conn.newsletterUnmute("abcd@newsletter")
```
- **To mute notifications for a newsletter**
``` ts
await conn.newsletterMute("abcd@newsletter")
```
- **To create a newsletter**
``` ts
const metadata = await conn.newsletterCreate("Newsletter Name", "Newsletter Description")
console.log(metadata)
```
- **To delete a newsletter**
``` ts
await conn.newsletterDelete("abcd@newsletter")
```
- **To follow a newsletter**
``` ts
await conn.newsletterFollow("abcd@newsletter")
```
- **To unfollow a newsletter**
``` ts
await conn.newsletterUnfollow("abcd@newsletter")
```
- **To send reaction**
``` ts
// jid, id message & emoticon
// way to get the ID is to copy the message url from channel
// Example: [ https://whatsapp.com/channel/xxxxx/175 ]
// The last number of the URL is the ID
const id = "175"
await conn.newsletterReactMessage("abcd@newsletter", id, "🥳")
```

### BUTTON MESSAGE & INTERACTIVE MESSAGE

- **To send button with text**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons,
    headerType: 1,
    viewOnce: true
}

await conn.sendMessage(id, buttonMessage, { quoted: null })
```
- **To send button with image**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    image: { url: "https://example.com/abcd.jpg" }, // image: buffer or path
    caption: "Hi it's button message with image",
    footer: 'Hello World',
    buttons,
    headerType: 1,
    viewOnce: true
}

await conn.sendMessage(id, buttonMessage, { quoted: null })

```
- **To send button with video**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    video: { url: "https://example.com/abcd.mp4" }, // video: buffer or path
    caption: "Hi it's button message with video",
    footer: 'Hello World',
    buttons,
    headerType: 1,
    viewOnce: true
}

await conn.sendMessage(id, buttonMessage, { quoted: null })
```

- **To send interactive message**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    text: "Hello World!",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await conn.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with image**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    image: { url: "https://example.com/abcd.jpg" }, // image: buffer or path
    caption: "this is the caption",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await conn.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with video**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    video: { url: "https://example.com/abcd.mp4" }, // video: buffer or path
    caption: "this is the caption",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await conn.sendMessage(id, interactiveMessage, { quoted: null })
```

### AI Icon

```ts
// just add "ai: true" function to sendMessage
await conn.sendMessage(id, { text: "Hello Wold", ai: true })
```

### Custom Code Pairing

```ts
if(usePairingCode && !conn.authState.creds.registered) {
    const phoneNumber = await question('Please enter your mobile phone number:\n')
    const custom = "ZEROCODE" // must be 8 digits, can be letters or numbers
    const code = await conn.requestPairingCode(phoneNumber, custom)
    console.log(`Pairing code: ${code?.match(/.{1,4}/g)?.join('-') || code}`)
}
```

## Reporting Issues
If you encounter any issues while using this repository or any part of it, please feel free to open a [new issue](https://github.com/SankaVollereii/Sanka-Baileys/issues) here.

## Notes
Everything other than the modifications mentioned above remains the same as the original repository. You can check out the original repository at [WhiskeySockets](https://github.com/WhiskeySockets/Baileys)