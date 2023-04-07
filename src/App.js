function App() {
  return (
    // Root
    // TODO: create reusable component, sort tailwind class
    <div class="flex xl:h-screen flex-col p-12">
      {/* About & Spotify */}
      <div class="flex flex-col xl:flex-row justify-center">
        <div
          id="content-about-me"
          class="bg-gray-100 rounded-xl flex flex-col-reverse w-full md:flex-row overflow-hidden xl:mr-8 mb-8"
        >
          <img
            class="object-cover"
            src="/assets/image/photo.png"
            width="320"
            alt="profile"
          />
          <div class="flex flex-col justify-center p-8">
            <p class="text-sm font-extrabold">About Me.</p>
            <h1 class="text-5xl font-extrabold">Hey There! I'm Ismail 👋</h1>

            {/* TODO: get value from API */}
            <p class="text-2xl text-slate-600">
              Software Engineer & Graduate Student. Indonesia
            </p>
            <p class="text-slate-600 mt-4">
              I have many names. Call me Ismail, Ishmael (just like in
              moby-dick), Is, Mail, Liam (reverse from Mail), Fafa or Dhafa.
            </p>

            {/* TODO: inject value using list, get from API */}
            <div class="flex flex-row space-x-4 mt-4">
              <a
                href="mailto:azh.zhafir@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="object-scale-down w-14"
                  src="/assets/icon/email.png"
                  alt="email"
                />
              </a>
              <a
                href="https://wa.me/+6285155020773"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="object-scale-down w-14"
                  src="/assets/icon/whatsapp.png"
                  alt="whatsapp"
                />
              </a>
              <a
                href="https://www.instagram.com/ismailrohaga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="object-scale-down w-14"
                  src="/assets/icon/instagram.png"
                  alt="instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/user/azhzhafir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="object-scale-down w-14"
                  src="/assets/icon/youtube.png"
                  alt="youtube"
                />
              </a>
            </div>
          </div>
        </div>

        <div id="content-spotify">
          {/* TODO: get spotify playlist link via API services */}

          <iframe
            title="spotify-playlist-embed"
            class="aspect-video xl:aspect-square w-full xl:w-96 mb-8"
            src="https://open.spotify.com/embed/playlist/33bGIXVLaiAWuQxsaNyI2k?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End of About & Spotify */}

      {/* Education */}
      <div class="flex h-1/3">
        <div
          id="content-education"
          class="bg-gray-100 rounded-xl flex flex-col-reverse w-full md:flex-row overflow-hidden mb-8"
        >
          <img
            class="object-cover md:w-1/3 md:h-full h-32"
            src="/assets/image/bg-education.png"
            alt="https://unsplash.com/photos/_OZCl4XcpRw"
          />
          <div class="flex flex-col justify-center p-8">
            <p class="text-sm font-extrabold">Education.</p>
            <h1 class="text-2xl font-extrabold">
              Currently @BINUS Graduate MMSI Program (2022 - 2024)
            </h1>

            <p class="text-2xl text-slate-600 mt-4">
              BINUS University, Bachelor’s Degree, Informatics (2019 - 2022)
            </p>
            <p class="text-2xl text-slate-600">
              Vocational High School 13, Software Engineering (2015 - 2018)
            </p>
          </div>
        </div>
      </div>
      {/* End of Education */}

      {/* Connect & Experience */}
      <div class="flex flex-col xl:flex-row justify-center h-1/3">
        <div
          id="content-linkedin"
          class="bg-gray-900 rounded-xl flex xl:aspect-square xl:mr-8 mb-8"
        >
          <div class="flex flex-col justify-center p-8 text-white">
            <p class="text-sm font-extrabold">Connect.</p>
            <h1 class="text-5xl font-extrabold">
              Let's get
              <a
                href="https://www.linkedin.com/in/ismailrohaga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p class="underline">Linked-in</p>
              </a>
            </h1>
          </div>
        </div>

        <div
          id="content-education"
          class="bg-gray-100 rounded-xl flex flex-col w-full md:flex-row overflow-hidden mb-8"
        >
          <div class="flex flex-col justify-center p-8">
            <p class="text-sm font-extrabold">Experience.</p>
            <h1 class="text-5xl font-extrabold text-ellipsis overflow-hidden">
              4+ Years of Software Development
            </h1>
            <p class="text-2xl text-slate-600 mt-4">
              From web to mobile development, From PHP to Kotlin & JS.
            </p>
          </div>
          <img
            class="object-cover md:w-1/3 md:h-auto h-32"
            src="/assets/image/bg-experience.jpg"
            alt="https://unsplash.com/photos/842ofHC6MaI"
          />
        </div>
      </div>
      {/* End of Connect & Experience */}
    </div>
  );
}

export default App;
