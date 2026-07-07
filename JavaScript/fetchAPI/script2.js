function getDog() {
    // console.log("Button clicked!"); // 👈 Add this line

    fetch("https://dog-breeds9.p.rapidapi.com/details?id=5", {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "b1582804d0msh1c04bb25b79b5e7p1f46c7jsne08b3d2ceff7",
            "X-RapidAPI-Host": "dog-breeds9.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("API response:", data); // 👈 Add this too
        const img = document.getElementById('dogImage');
        img.src = data.image_link || 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg';
        img.style.display = 'block';
    })
    .catch(error => {
        alert('Oops! Could not fetch a dog 🐾');
        console.error(error);
    });
}
