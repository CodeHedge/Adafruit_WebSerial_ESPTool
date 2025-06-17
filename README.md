## [CYM Web Flasher](https://fr4nkfletcher.github.io/Adafruit_WebSerial_ESPTool/)

A fork of Adafruit’s WebSerial tool for flashing ESP32Marauder onto the Cheap Yellow Display and similar devices.

---

### Flashing Method

#### Automatic Flashing
This method flashes your chosen ESP32 Marauder firmware version to your selected Model.
<p align="center">
  <img src="https://github.com/CodeHedge/Adafruit_WebSerial_ESPTool/blob/main/assets/sc00000.jpg" alt="Flashing Marauder Automatically">
</p>


For further instructions, check out @Blough's [tutorial](https://github.com/witnessmenow/ESP-Web-Tools-Tutorial).

---
## Local Development

```
git clone https://github.com/CodeHedge/Adafruit_WebSerial_ESPTool
cd Adafruit_WebSerial_ESPTool
npm install
./script/develop
```
- Open http://localhost:5004/

## Origin

This project was originally written by Melissa LeBlanc-Williams. Nabu Casa ported the code over to TypeScript and in March 2022 took over maintenance from Adafruit. In July 2022, the Nabucasa stopped maintaining the project in favor of an official, but very early release of Espressif's esptool-js. Due to the instability of the tool, Adafruit updated their fork with Nabucasa's changes in November 2022 and took over maintenance once again.

Thanks to Fr4nkFletcher for the original work. We all owe you a big thanks.

Many thanks to the maintainers over at [FZEEFlasher](https://github.com/FZEEFlasher/fzeeflasher.github.io)
