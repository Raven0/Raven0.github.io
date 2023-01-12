function App() {
  return (
    // Root
    // TODO: create reusable component, sort tailwind class
    <div class="flex xl:h-screen flex-col p-12 justify-center">
      {/* About & Spotify */}
      <div class="flex flex-col xl:flex-row justify-center">
        <div
          id="content-about-me"
          class="bg-gray-100 rounded-xl flex flex-col-reverse w-auto md:flex-row xl:pr-14 overflow-hidden xl:mr-8 mb-8"
        >
          <img
            class="object-cover"
            src="/assets/image/photo.png"
            width="320"
            alt="whatsapp"
          />
          <div class="flex flex-col justify-center p-8">
            <p class="text-sm font-extrabold">About Me.</p>
            <h1 class="text-5xl font-extrabold">Hey There! I'm Ismail 👋</h1>

            {/* TODO: get value from API */}
            <p class="text-2xl text-slate-600">
              Software Engineer & Graduate Student. Indonesia
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
            src="https://open.spotify.com/embed/playlist/0pR9RyH0MjYav662eTpIKX?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End of About & Spotify */}

      {/* TODO: Before working on these two section, remove justify-center props on root div*/}
      {/* Education */}
      <div class="flex flex-row">
        <div></div>
      </div>
      {/* End of Education */}

      {/* Connect & Experience */}
      <div class="flex flex-row"></div>
      {/* End of Connect & Experience */}
    </div>
  );
}

export default App;
