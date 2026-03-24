const verify = document.getElementById("verificar");

const homemIdoso =
  "https://imgs.search.brave.com/zETjzF-F2iXUNuXmaLZzWccFH1tszqTOckzP6wrrQnA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi83/NTY4Njc5LXJldHJh/dG8tZGUtc29ycmlz/by1ib25pdG8taG9t/ZW0tbWFpcy12ZWxo/by1hZ3JpY3VsdG9y/LWhvbWVtLWlkb3Nv/LW5hLWZhemVuZGEt/ZW0tZGlhLWRlLXZl/cmFvLWF0aXZpZGFk/ZS1qYXJkaW5hZ2Vt/LWhvbWVtLWlkb3Nv/LWJyYXNpbGVpcm8t/Zm90by5qcGc";
const mulherIdosa =
  "https://imgs.search.brave.com/Ii2do07Kc1wxNcKBnZIc056vloj49YMKa3spV6siW-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi83/MjExNzg5OC1pZG9z/b3MtbXVsaGVyLWNv/bS1jaW56ZW50by1j/YWJlbG8tc29ycmlk/ZW50ZS1jYWxvcm9z/YW1lbnRlLWV4aWJp/bmRvLXNhYmVkb3Jp/YS1lLWV4cGVyaWVu/Y2lhLWRlbnRyby11/bWEtaWx1bWluYWNh/by1zdWF2ZS1yZXRy/YXRvLWZvdG8uanBn";
const homemAdulto =
  "https://imgs.search.brave.com/QFB3TIRx_uxqn6CbBwcv5KQL64IEb3XufwtVpM4-_kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/ODEzNDMzNi9wdC9m/b3RvL2hlYWRzaG90/LXBvcnRyYWl0LWFm/cmljYW4tMzBzLW1h/bi1zbWlsZS1sb29r/LWF0LWNhbWVyYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UXNTbFR6U0RtaUhy/RDItRVNvZWRPb1Fr/RGxlSHNvREtWOHJ5/MU5tRzRkZz0";
const mulherAdulta =
  "https://imgs.search.brave.com/wBXNTAOhXgTT5vpyfwap9JNqCh3nAQuL_8tCHWKoqMQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NTg3MTM5OS9wdC9m/b3RvL211Z3Nob3Qt/b2YtY29uZmlkZW50/LWFkdWx0LXdvbWFu/LmpwZz9zPTYxMng2/MTImdz1pcyZrPTIw/JmM9R3VZdnM0VHdZ/QjJXUlRhOV82WC11/RzhJMmw4V2dnWkdj/bENjVThaZUhkaz0";
const homemJovem =
  "https://imgs.search.brave.com/GVk8Z_95OMEwCTXA4t-vh80M7l4izBZaq7gFHMQycmw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi81/NDAwNzA5NS1hc2lh/LWpvdmVtLWhvbWVt/LWNvbS1tb2NoaWxh/LWZvdG8uanBn";
const mulherJovem =
  "https://imgs.search.brave.com/vNBYSsRpDmoHtn4Jfy7slJLTQYyQznmCAwtdlH6bF3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi82/NTk0MDc5Ni1zb3Jy/aWRlbnRlLWpvdmVt/LW11bGhlci1hcy1h/LWFlcm9wb3J0by1w/cm9udG8tcGFyYS1k/ZWxhLWpvcm5hZGEt/dW1hLXNpbmNlcm8t/cmV0cmF0by1jYXB0/dXJhbmRvLWEtZXhj/aXRhY2FvLWRvLXZp/YWdlbS1lLWF2ZW50/dXJhLWdyYXRpcy1m/b3RvLmpwZWc";
const homemBebe =
  "https://imgs.search.brave.com/CO-uqIUfkt0W6D9bhH6KlFR5hx_Mx3H0QANAC8TgvY0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L3NvcnJpZGVudGUt/bWVuaW5vLWJyaW5j/YW5kby1kZS1za2F0/ZS1uYS1jaWRhZGUt/Y2F1Y2FzaWFuby1j/cmlhbmNhLW1vbnRh/bmRvLWNlbnRhdm8t/dGFidWFfMTU4NTk1/LTYyMzQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA";
const mulherBebe =
  "https://imgs.search.brave.com/CKlZ4i-cIYkQnuZAQyVrSY-1jeyhSUgx2JQFxsTUMnI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi83/MDc4MDM5OC11bWEt/cGVxdWVuby1tZW5p/bmEtZS1zb3JyaWRl/bnRlLWRlbnRyby1m/cmVudGUtZG8tdW1h/LWFydm9yZS1mb3Rv/LmpwZw";

function renderPerson(event) {
  event.preventDefault();
  const data = new Date();
  const currentYear = data.getFullYear();
  const yearOfBirth = Number(document.getElementById("nascimento").value);
  const age = currentYear - yearOfBirth;
  const sex = document.querySelector('input[id="masculino"]:checked')
    ? "masculino"
    : "feminino";

  const response = document.getElementById("resposta");

  if (yearOfBirth === 0 || yearOfBirth < 0 || yearOfBirth > currentYear) {
    alert("[ERRO] Verifique os dados e tente novamente!");
    return;
  }
  response.innerHTML = `<p>Você tem ${age} anos de idade</p>`;

  // HOMEM
  if (sex === "masculino") {
    if (age <= 10) {
      response.innerHTML += `<img src="${homemBebe}" alt="Um menino com menos de 10 anos" >`;
    } else if (age <= 25) {
      response.innerHTML += `<img src="${homemJovem}" alt="Um jovem com menos de 25 anos" >`;
    } else if (age <= 50) {
      response.innerHTML += `<img src="${homemAdulto}" alt="Um adulto com menos de 50 anos" >`;
    } else if (age < 100) {
      response.innerHTML += `<img src="${homemIdoso}" alt="Um idoso com menos de 100 anos" >`;
    }
  }
  // MULHER
  if (sex === "feminino") {
    if (age <= 10) {
      response.innerHTML += `<img src="${mulherBebe}" alt="Uma menina com menos de 10 anos" >`;
    } else if (age <= 25) {
      response.innerHTML += `<img src="${mulherJovem}" alt="Uma jovem com menos de 25 anos" >`;
    } else if (age <= 50) {
      response.innerHTML += `<img src="${mulherAdulta}" alt="Uma adulta com menos de 50 anos" >`;
    } else if (age < 100) {
      response.innerHTML += `<img src="${mulherIdosa}" alt="Uma idosa com menos de 100 anos" >`;
    }
  }
}
verify.addEventListener("click", renderPerson);
