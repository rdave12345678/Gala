/* const {
  smd,
  fetchJson,
  astroJson,
  fancytext,
  yt,
  getBuffer,
  smdBuffer,
  prefix,
  Config
} = require("../lib");
const {
  search,
  download
} = require("aptoide-scraper");
const yts = require("secktor-pack");
const axios = require('axios'); // Ensure axios is required
const fs = require('fs'); // Required for saving temporary audio files
const path = require('path'); // To manage file paths

smd({
  'pattern': "pla",
  'alias': ["music"],
  'desc': "Downloads audio from YouTube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<search text>"
}, async (_0x213b75, _0x13be17) => {
  try {
    if (!_0x13be17) {
      return await _0x213b75.reply("*_Give Me a Search Query_*");
    }
    let _0x14c1a1 = await yts(_0x13be17);
    let _0x4f86cb = _0x14c1a1.all[0];
    if (!_0x4f86cb) {
      return await _0x213b75.reply("*_No results found for your search_*");
    }
    let _0x4342ba = await smdBuffer(_0x4f86cb.thumbnail);
    await _0x213b75.bot.sendMessage(_0x213b75.jid, {
      'image': _0x4342ba,
      'caption': "\n*Queen_NIKKA • ᴍᴜꜱɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n\n*🍀Title :* " + _0x4f86cb.title + "\n*🍀Url :* " + _0x4f86cb.url + "\n*🍀Description :* " + _0x4f86cb.timestamp + "\n*🍀Views :* " + _0x4f86cb.views + "\n*🍀Uploaded :* " + _0x4f86cb.ago + "\n*🍀Author :* " + _0x4f86cb.author.name + "\n\n== |🍀| powered by Haki |🍀| ==\n"
    });
    const _0x23d6e1 = "https://ironman.koyeb.app/ironman/dl/ytdl2?url=" + _0x4f86cb.url";
    let _0x4acf6c = 3;
    while (_0x4acf6c > 0) {
      try {
        const _0x2cc463 = await axios.get(_0x23d6e1);
        const _0x509920 = _0x2cc463.data;
        console.log("API Response:", _0x509920);
        if (_0x509920.success && _0x509920.url) {
          const _0x539170 = _0x509920.url;
          const _0x3ce5d2 = await axios({
            'url': _0x539170,
            'method': "GET",
            'responseType': "stream"
          });
          const _0x239ef4 = path.join(__dirname, _0x4f86cb.title + ".mp3");
          const _0x49450f = fs.createWriteStream(_0x239ef4);
          _0x3ce5d2.data.pipe(_0x49450f);
          await new Promise((_0x46fbcf, _0x176108) => {
            _0x49450f.on("finish", _0x46fbcf);
            _0x49450f.on("error", _0x176108);
          });
          console.log("Audio saved to " + _0x239ef4);
          await _0x213b75.bot.sendMessage(_0x213b75.jid, {
            'audio': {
              'url': _0x239ef4
            },
            'fileName': _0x4f86cb.title + ".mp3",
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x213b75
          });
          fs.unlinkSync(_0x239ef4);
          return;
        } else {
          console.log("Error: Could not download audio, API response:", _0x509920);
          await _0x213b75.reply("*_Error: Could not download the audio. Please try again later!_*");
          return;
        }
      } catch (_0x2b8c59) {
        console.error("Retry Error:", _0x2b8c59);
        _0x4acf6c--;
        if (_0x4acf6c === 0) {
          await _0x213b75.reply("*_Error: Could not download the audio after multiple attempts. Please try again later!_*");
        }
      }
    }
  } catch (_0x3c9fcf) {
    console.error("Caught Error:", _0x3c9fcf);
    return _0x213b75.error(_0x3c9fcf + "\n\ncommand: play", _0x3c9fcf, "*_File not found!!_*");
  }
});
smd({
  'pattern': "yta",
  'alias': ["download"],
  'desc': "Downloads audio from a direct YouTube link.",
  'category': "downloader",
  'filename': __filename,
  'use': "<YouTube video URL>"
}, async (_0x38a599, _0x2f47ed) => {
  try {
    if (!_0x2f47ed) {
      return await _0x38a599.reply("*_Provide a YouTube video URL_*");
    }
    const _0x2e06bc = "https://api-gifted-tech.onrender.com/api/download/ytmp3v2?url=" + _0x2f47ed + "&apikey=gifteddevskk";
    let _0x5f0163 = 3;
    while (_0x5f0163 > 0) {
      try {
        const _0x5d4537 = await axios.get(_0x2e06bc);
        const _0x11496f = _0x5d4537.data;
        console.log("API Response:", _0x11496f);
        if (_0x11496f.success && _0x11496f.url) {
          const _0x4122a8 = _0x11496f.url;
          const _0x4be60f = await axios({
            'url': _0x4122a8,
            'method': "GET",
            'responseType': "stream"
          });
          const _0x4d8917 = path.join(__dirname, Date.now() + ".mp3");
          const _0x1cadfd = fs.createWriteStream(_0x4d8917);
          _0x4be60f.data.pipe(_0x1cadfd);
          await new Promise((_0x6639f3, _0x115846) => {
            _0x1cadfd.on("finish", _0x6639f3);
            _0x1cadfd.on("error", _0x115846);
          });
          console.log("Audio saved to " + _0x4d8917);
          await _0x38a599.bot.sendMessage(_0x38a599.jid, {
            'audio': {
              'url': _0x4d8917
            },
            'fileName': Date.now() + ".mp3",
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x38a599
          });
          fs.unlinkSync(_0x4d8917);
          return;
        } else {
          console.log("Error: Could not download audio, API response:", _0x11496f);
          await _0x38a599.reply("*_Error: Could not download the audio. Please try again later!_*");
          return;
        }
      } catch (_0x3c5074) {
        console.error("Retry Error:", _0x3c5074);
        _0x5f0163--;
        if (_0x5f0163 === 0) {
          await _0x38a599.reply("*_Error: Could not download the audio after multiple attempts. Please try again later!_*");
        }
      }
    }
  } catch (_0x2c930d) {
    console.error("Caught Error:", _0x2c930d);
    return _0x38a599.error(_0x2c930d + "\n\ncommand: yta", _0x2c930d, "*_File not found!!_*");
  }
});
smd({
  pattern: "ytmp4",
  // Changed command name to 'fiy'
  alias: ["ytdl"],
  desc: "Downloads video from a YouTube link.",
  category: "downloader",
  filename: __filename,
  use: "<YouTube video URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a YouTube video URL_*");
    }
    const videoUrl = _0x4ec99f.trim(); // Trim to remove any extra spaces

    // Call the YouTube downloader API
    // Log the API URL being called for debugging
    console.log(`API URL: ${`https://api-gifted-tech.onrender.com/api/download/ytdl?url=${videoUrl}&apikey=gifteddevskk`}`);
    const response = await axios.get(`https://api-gifted-tech.onrender.com/api/download/ytdl?url=${videoUrl}&apikey=gifteddevskk`);
    const data = response.data;

    // Log the entire response to inspect its structure
    console.log("Full API Response:", JSON.stringify(data, null, 2));

    // Handle the response and extract the video URL
    if (data && data.success && data.result && data.result.video_url) {
      const videoDownloadUrl = data.result.video_url; // Extract the video URL from the 'video_url' response
      const videoTitle = data.result.tittle || "Downloaded Video"; // Use the title or a default name

      console.log(`Download URL: ${videoDownloadUrl}`);

      // Download the video file
      const videoResponse = await axios({
        url: videoDownloadUrl,
        method: 'GET',
        responseType: 'stream'
      });

      // Create a temporary file path for the video
      const tempFilePath = path.join(__dirname, `${Date.now()}.mp4`);
      const writer = fs.createWriteStream(tempFilePath);

      // Pipe the video stream to the file
      videoResponse.data.pipe(writer);

      // Handle completion of file writing
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
      console.log(`Video saved to ${tempFilePath}`);

      // Send the video file to the user in normal quality
      await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
        video: {
          url: tempFilePath
        },
        caption: `Here is your downloaded video: *${videoTitle}*`,
        fileName: `${Date.now()}.mp4`,
        mimetype: "video/mp4"
      }, {
        quoted: _0x2c2023
      });

      // Optionally, delete the temporary file after sending
      fs.unlinkSync(tempFilePath);
    } else {
      console.log("Error: Could not retrieve the video download URL, API response:", data);
      await _0x2c2023.reply("*_Error: Could not retrieve the video download URL. Please try again later!_*");
    }
  } catch (_0x86b411) {
    console.error("Caught Error:", _0x86b411); // Log any caught errors
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: fiy", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});
smd({
  pattern: "ytsv",
  alias: ["video"],
  desc: "Downloads video from YouTube.",
  category: "downloader",
  filename: __filename,
  use: "<search text>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Give Me a Search Query_*");
    }

    // Search for the video on YouTube
    let _0x3b2ca6 = await yts(_0x4ec99f);
    let _0x4123ae = _0x3b2ca6.all[0]; // First search result

    if (!_0x4123ae) {
      return await _0x2c2023.reply("*_No results found for your search_*");
    }

    // Send search result details to the user
    let _0x3885cc = await smdBuffer(_0x4123ae.thumbnail);
    await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
      image: _0x3885cc,
      caption: `
*Queen_NIKKA • ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*

*Title :* ${_0x4123ae.title}
*Url :* ${_0x4123ae.url}
*Description :* ${_0x4123ae.timestamp}
*Views :* ${_0x4123ae.views}
*Uploaded :* ${_0x4123ae.ago}
*Author :* ${_0x4123ae.author.name}

_NIKKA is downloading the video..._
`
    });

    // Fetch the video download link using the API

    let retries = 3;
    while (retries > 0) {
      try {
        const response = await axios.get(`https://ironman.koyeb.app/ironman/dl/ytdl2?url=${_0x4123ae.url}`);
        const data = response.data;
        console.log("API Response:", data); // Log the API response for debugging

        // Check if the API call was successful and contains the video_url
        if (data.success && data.result && data.result.video_url) {
          const videoUrl = data.result.video_url; // This is the video URL to be downloaded

          // Fetch the video file from the video_url
          const videoResponse = await axios({
            url: videoUrl,
            method: 'GET',
            responseType: 'stream'
          });

          // Save the video to a temporary file
          const tempFilePath = path.join(__dirname, `${_0x4123ae.title}.mp4`);
          const writer = fs.createWriteStream(tempFilePath);
          videoResponse.data.pipe(writer);

          // Handle completion of file write
          await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
          });
          console.log(`Video saved to ${tempFilePath}`);

          // Send the video file to the user
          await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
            video: {
              url: tempFilePath
            },
            fileName: `${_0x4123ae.title}.mp4`,
            mimetype: "video/mp4"
          }, {
            quoted: _0x2c2023
          });

          // Optionally, delete the temporary file after sending
          fs.unlinkSync(tempFilePath);
          return; // Exit after successful send
        } else {
          console.log("Error: Could not fetch video, API response:", data);
          await _0x2c2023.reply("*_Error: Could not download the video. Please try again later!_*");
          return;
        }
      } catch (error) {
        console.error("Retry Error:", error); // Log retry errors
        retries--;
        if (retries === 0) {
          await _0x2c2023.reply("*_Error: Could not download the video after multiple attempts. Please try again later!_*");
        }
      }
    }
  } catch (_0x86b411) {
    console.error("Caught Error:", _0x86b411); // Log any caught errors
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: ytsv", _0x86b411, "*_File not found!!_*");
  }
});

/*
,$ smd({
  pattern: "play3",
  alias: ["music"],
  desc: "Downloads audio from YouTube using a search query.",
  category: "downloader",
  filename: __filename,
  use: "<search text>"
}, async (message, searchQuery) => {
  try {
    if (!searchQuery) {
      return await message.reply("*_Please provide a search query!_*");
    }

    // Search YouTube for the provided query using yts
    let searchResults = await yts(searchQuery);
    let firstResult = searchResults.all[0];

    if (!firstResult) {
      return await message.reply("*_No results found for your search_*");
    }

    // Send the video thumbnail and info to the user
    let thumbnailBuffer = await smdBuffer(firstResult.thumbnail);
    await message.bot.sendMessage(message.jid, {
      image: thumbnailBuffer,
      caption: `\n*Queen_NIKKA • ᴍᴜꜱɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n\n*🍀Title :* ${firstResult.title}\n*🍀Url :* ${firstResult.url}\n*🍀Description :* ${firstResult.timestamp}\n*🍀Views :* ${firstResult.views}\n*🍀Uploaded :* ${firstResult.ago}\n*🍀Author :* ${firstResult.author.name}\n\n== |🍀| powered by Haki |🍀| ==\n`
    });

    // Now, use the first result's URL with the Ironman API to get the audio download link
    const apiUrl = `https://ironman.koyeb.app/ironman/dl/ytdl2?url=${firstResult.url}`;

    // Retry mechanism in case the download fails
    let retries = 3;
    while (retries > 0) {
      try {
        // Fetch the audio download link from Ironman API
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Check if the API responded with a success and download URL
        if (data.success && data.url) {
          const audioUrl = data.url;

          // Send the audio file as a message
          await message.bot.sendMessage(message.jid, {
            audio: {
              url: audioUrl
            },
            fileName: `${firstResult.title}.mp3`,
            mimetype: "audio/mpeg"
          }, {
            quoted: message
          });

          return; // Exit after success
        } else {
          console.log("Error: Could not download audio, API response:", data);
          await message.reply("*_Error: Could not download the audio. Please try again later!_*");
          return;
        }
      } catch (error) {
        console.error("Retry Error:", error);
        retries--;
        if (retries === 0) {
          await message.reply("*_Error: Could not download the audio after multiple attempts. Please try again later!_*");
        }
      }
    }
  } catch (error) {
    console.error("Caught Error:", error);
    return message.error(error + "\n\ncommand: play", error, "*_File not found!!_*");
  }
});



smd({
  pattern: "play7",
  alias: ["music"],
  desc: "Downloads audio from YouTube using a search query.",
  category: "downloader",
  filename: __filename,
  use: "<search text>"
}, async (message, searchQuery) => {
  try {
    if (!searchQuery) {
      return await message.reply("*_Please provide a search query!_*");
    }

    // Search YouTube for the provided query using yts
    let searchResults = await yts(searchQuery);
    let firstResult = searchResults.all[0];

    if (!firstResult) {
      return await message.reply("*_No results found for your search_*");
    }

    // Send the video thumbnail and info to the user
    let thumbnailBuffer = await smdBuffer(firstResult.thumbnail);
    await message.bot.sendMessage(message.jid, {
      image: thumbnailBuffer,
      caption: `\n*Queen_NIKKA • ᴍᴜꜱɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n\n*🍀Title :* ${firstResult.title}\n*🍀Url :* ${firstResult.url}\n*🍀Description :* ${firstResult.timestamp}\n*🍀Views :* ${firstResult.views}\n*🍀Uploaded :* ${firstResult.ago}\n*🍀Author :* ${firstResult.author.name}\n\n== |🍀| powered by Haki |🍀| ==\n`
    });

    // Now, use the first result's URL with the Ironman API to get the audio download link
    const apiUrl = `https://ironman.koyeb.app/ironman/dl/ytdl2?url=${firstResult.url}`;

    // Make a request to the Ironman API
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.success && data.url) {
      // Audio download link from Ironman API
      const audioUrl = data.url;

      // Send the audio file as a message
      await message.bot.sendMessage(message.jid, {
        audio: {
          url: audioUrl
        },
        fileName: `${firstResult.title}.mp3`,
        mimetype: "audio/mpeg"
      }, {
        quoted: message
      });
    } else {
      console.log("Error: Could not download audio, API response:", data);
      await message.reply("*_Error: Could not download the audio. Please try again later!_*");
    }
  } catch (error) {
    console.error("Caught Error:", error);
    return message.error(error + "\n\ncommand: play", error, "*_File not found!!_*");
  }
});




smd({
  pattern: "play10",
  alias: ["music"],
  desc: "Downloads audio from YouTube.",
  category: "downloader",
  filename: __filename,
  use: "<search text>"
}, async (message, searchQuery) => {
  try {
    // Check if search query is provided
    if (!searchQuery) {
      return await message.reply("*_Please provide a search query for YouTube audio download!_*");
    }

    // Search YouTube for the provided query using yts
    const searchResults = await yts(searchQuery);
    const videoResult = searchResults.all[0];  // Take the first result

    if (!videoResult) {
      return await message.reply("*_No results found for your search query_*");
    }

    // Send video info back to the user
    await message.reply(`*🎵 Fetching Audio...*\n\n*Title:* ${videoResult.title}\n*Duration:* ${videoResult.timestamp}\n*Views:* ${videoResult.views}\n*Link:* ${videoResult.url}`);

    // Use the Ironman API to get the audio download link
    const apiUrl = `https://ironman.koyeb.app/ironman/dl/ytdl2?url=${videoResult.url}`;

    // Debugging: Log the API URL
    console.log("Requesting audio from API URL:", apiUrl);

    // Fetch the audio download link from the API
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Debugging: Log the API response
    console.log("API Response:", data);

    // Check if the API responded with a valid audio URL
    if (data.success && data.url) {
      const audioUrl = data.url;

      // Send the audio file to the user
      await message.bot.sendMessage(message.jid, {
        audio: {
          url: audioUrl
        },
        fileName: `${videoResult.title}.mp3`,
        mimetype: "audio/mpeg"
      }, {
        quoted: message
      });
    } else {
      // If the API didn't return the expected data, log it
      console.log("Error: API did not return a valid URL or success flag. API response:", data);
      await message.reply("*_Error: Could not retrieve audio. Please try again later!_*");
    }

  } catch (error) {
    // Detailed error logging
    console.error("Error while processing the play command:", error);
    await message.reply("*_Error processing your request. Please try again later!_*");
  }
});





const axios = require("axios");
const fs = require("fs");
const path = require("path");

smd({
  'pattern': "pla2",
  'alias': ["music"],
  'desc': "Downloads audio from YouTube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<search text>"
}, async (_0x213b75, _0x13be17) => {
  try {
    // Ensure a search query is provided
    if (!_0x13be17) {
      return await _0x213b75.reply("*_Give Me a Search Query_*");
    }

    // Search YouTube using yts or a similar package
    let _0x14c1a1 = await yts(_0x13be17);
    let _0x4f86cb = _0x14c1a1.all[0];
    if (!_0x4f86cb) {
      return await _0x213b75.reply("*_No results found for your search_*");
    }

    // Download the thumbnail and send initial message
    let _0x4342ba = await smdBuffer(_0x4f86cb.thumbnail);
    await _0x213b75.bot.sendMessage(_0x213b75.jid, {
      'image': _0x4342ba,
      'caption': "\n*Queen_NIKKA • ᴍᴜꜱɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n\n*🍀Title :* " + _0x4f86cb.title + "\n*🍀Url :* " + _0x4f86cb.url + "\n*🍀Description :* " + _0x4f86cb.timestamp + "\n*🍀Views :* " + _0x4f86cb.views + "\n*🍀Uploaded :* " + _0x4f86cb.ago + "\n*🍀Author :* " + _0x4f86cb.author.name + "\n\n== |🍀| powered by Haki |🍀| ==\n"
    });

    // API to download YouTube audio
    const _0x23d6e1 = `https://ironman.koyeb.app/ironman/dl/ytdl2?url=${_0x4f86cb.url}`;
    let _0x4acf6c = 3;

    // Retry up to 3 times in case of failure
    while (_0x4acf6c > 0) {
      try {
        // Fetch the audio download URL from Ironman API
        const _0x2cc463 = await axios.get(_0x23d6e1);
        const _0x509920 = _0x2cc463.data;

        console.log("API Response:", _0x509920);

        // Check for a successful response and a valid download URL
        if (_0x509920.success && _0x509920.url) {
          const _0x539170 = _0x509920.url;

          // Fetch the audio stream
          const _0x3ce5d2 = await axios({
            'url': _0x539170,
            'method': "GET",
            'responseType': "stream"
          });

          // Save the audio to a local file
          const _0x239ef4 = path.join(__dirname, _0x4f86cb.title + ".mp3");
          const _0x49450f = fs.createWriteStream(_0x239ef4);
          _0x3ce5d2.data.pipe(_0x49450f);

          // Wait for the stream to finish
          await new Promise((_0x46fbcf, _0x176108) => {
            _0x49450f.on("finish", _0x46fbcf);
            _0x49450f.on("error", _0x176108);
          });

          console.log("Audio saved to " + _0x239ef4);

          // Send the audio file to the user
          await _0x213b75.bot.sendMessage(_0x213b75.jid, {
            'audio': {
              'url': _0x239ef4
            },
            'fileName': _0x4f86cb.title + ".mp3",
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x213b75
          });

          // Delete the temporary audio file after sending
          fs.unlinkSync(_0x239ef4);
          return;
        } else {
          console.log("Error: Could not download audio, API response:", _0x509920);
          await _0x213b75.reply("*_Error: Could not download the audio. Please try again later!_*");
          return;
        }
      } catch (_0x2b8c59) {
        console.error("Retry Error:", _0x2b8c59);
        _0x4acf6c--;
        if (_0x4acf6c === 0) {
          await _0x213b75.reply("*_Error: Could not download the audio after multiple attempts. Please try again later!_*");
        }
      }
    }
  } catch (_0x3c9fcf) {
    // Catch any error that occurs during execution and respond accordingly
    console.error("Caught Error:", _0x3c9fcf);
    return _0x213b75.error(_0x3c9fcf + "\n\ncommand: play", _0x3c9fcf, "*_File not found!!_*");
  }
});

*/
