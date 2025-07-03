const container = document.getElementById("articlesContainer");

    async function fetchArticles() {
      try {
        const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles?limit=12");
        const data = await res.json();
        const articles = data.results;

        articles.forEach(article => {
          const div = document.createElement("div");
          div.className = "article";

          // Create image slider container
          const imageContainer = document.createElement("div");
          imageContainer.className = "article-image-container";

          // Add main article image
          const mainImage = document.createElement("img");
          mainImage.src = article.image_url || 'assets/img2.png'; // Fallback to default image
          mainImage.alt = article.title;
          mainImage.className = "article-image";
          imageContainer.appendChild(mainImage);

          div.innerHTML = `
            <div class="article-content">
              <h2>${article.title}</h2>
              <p>${article.summary.slice(0, 120)}...</p>
              <a href="${article.url}" target="_blank">Read Full Article</a>
            </div>
          `;

          div.insertBefore(imageContainer, div.firstChild);
          container.appendChild(div);

          // Add hover effect for image zoom
          mainImage.addEventListener('mouseover', () => {
            mainImage.style.transform = 'scale(1.1)';
          });

          mainImage.addEventListener('mouseout', () => {
            mainImage.style.transform = 'scale(1)';
          });
        });
      } catch (error) {
        container.innerHTML = "<p> Error fetching space news.</p>";
        console.error(error);
      }
    }

    fetchArticles();