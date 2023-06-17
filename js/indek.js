const button = document.getElementById("login");
const email = document.getElementById("email");

const password = document.getElementById("password");

button.addEventListener("click", async () => {
  const response = await fetch(
    "https://express-mongodb-jwt-liard.vercel.app/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  localStorage.setItem("token", JSON.stringify(data?.token));
  localStorage.setItem("user", JSON.stringify(data?.user?.name));
  if (data.message == "success") {
    window.location.href = "/homepage.html";
  }
  if (data.message == "success") {
    alert("log in berhasil");
  }

  if (data.message == "Invalid credential") {
    alert("log in gagal");
  }
});
