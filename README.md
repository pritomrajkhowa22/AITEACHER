# AITEACHER

Learning a new language takes time and effort. AI can help people speed up the process and reduce the effort. To that end, we created the application using Next.js, React Three Fiber, Microsoft Azure Speech SDK, Chat GPT, and custom 3D models.


## Technologies Used

- Next.js, React Three Fiber.
- Chat GPT.
- Azure Speech SDK.



## Features

- **Next.js, React Three Fiber:**  Front End and Avatars(custom 3D models).
- **Chat GPT:**  Backend, which deals with translation and grammar break-up .
- **Microsoft Azure Speech SDK:**  Backend  which deals with text to speech convertion.



## Sequence Diagram


!["Sequence Diagram"](https://github.com/pritomrajkhowa22/AITEACHER/blob/main/AdditionalFiles/Sequence%20diagram.png)



## Demo Video

<video width="320" height="240" controls>
  <source src="AdditionalFiles/IMG_2369.MOV" type="video/mp4">
</video>




## Usage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pritomrajkhowa22/AITEACHER.git
   ```
2. Install dependencies:

   ```bash
   yarn
   ```
3. Install openai :

   ```bash
   yarn add openai
   ```
4. Install Microsoft Cognitiveservices Speech Sdk.
   ```bash
   yarn add microsoft-cognitiveservices-speech-sdk
   ```
5. update .env.local file:
   ```
   OPENAI_API_KEY=
   SPEECH_KEY=
   SPEECH_REGION=
   ```
6. Run the application:
   ```bash
   # Start  Application
   yarn dev
   ```
   
### Configuration

1. Set up environment variables:

   - Obtain API keys for OpenAI.
   - Obtain API keys for Azure text to speech.



