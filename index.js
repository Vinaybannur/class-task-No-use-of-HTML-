const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];
  
  const section=document.createElement("section");
  

  countries.forEach((countrie) =>{

      let container= document.createElement("div");
      container.className="flag-container";

      const image = document.createElement("img");
      image.className="flag";
      image.setAttribute("src",countrie.image)
      container.appendChild(image);

      let details= document.createElement("div");
      details.className="details";

      let h3 = document.createElement("h3");
      h3.innerText= countrie.country;
      details.appendChild(h3);

      let p1 = document.createElement("p");
      p1.innerText = countrie.population;

      let b1 =document.createElement('b');
      b1.innerText= "Population:";
      p1.appendChild(b1);
      details.appendChild(p1);

      let p2 = document.createElement("p");
      p2.innerText = countrie.region;

      let b2 =document.createElement('b');
      b2.innerText= "Region:";
      p2.appendChild(b2);
      details.appendChild(p2);

      let p3 = document.createElement("p");
      p3.innerText = countrie.capital;
      let b3 =document.createElement('b');
      b3.innerText= "Captial:";
      p3.appendChild(b3);
      details.appendChild(p3);
     
      container.appendChild(details);

      section.appendChild(container); 
    
  });
  document.body.append(section);
     