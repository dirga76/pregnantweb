const button = document.getElementById("register");
const name = document.getElementById("name");
const age = document.getElementById("age");
const born = document.getElementById("born");
const pregnancy = document.getElementById("pregnancy");
const city = document.getElementById("city");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("click", async () => {
  const response = await fetch(
    "https://mother-journey-be.vercel.app/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        age: age.value,
        born: born.value,
        pregnancy: pregnancy.value,
        city: city.value,
        email: email.value,
        password: password.value,
      }),
    }
  );
  const data = await response.json();
  console.log(data);

  if (data.message == "success") {
    window.location.href = "/login.html";
  }

  if (data.message == "succes") {
    alert("register berhasil");
  }

  if (data.message == "failed") {
    alert("register gagal");
  }
});
