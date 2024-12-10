const ingredientData = {
    "fromage blanc": { calories: 60, proteins: 8, fats: 0.2, carbs: 4, price: 0.5 },
    "oeuf": { calories: 70, proteins: 6, fats: 5, carbs: 0.6, price: 0.3 },
    "lait": { calories: 50, proteins: 3, fats: 1, carbs: 5, price: 0.1 },
    "farine": { calories: 364, proteins: 10, fats: 1, carbs: 76, price: 0.2 },
    "levure": { calories: 15, proteins: 2, fats: 0, carbs: 1, price: 0.1 },
    "proteines": { calories: 120, proteins: 30, fats: 1, carbs: 2, price: 1.5 },
    "poulet": { calories: 165, proteins: 31, fats: 3.6, carbs: 0, price: 3.55 },
    "lentilles": { calories: 116, proteins: 9, fats: 0.4, carbs: 20, price: 1.39 },
    "boeuf": { calories: 250, proteins: 26, fats: 15, carbs: 0, price: 8.38 },
    "agneau": { calories: 294, proteins: 25, fats: 21, carbs: 0, price: 0 },
    "saumon": { calories: 206, proteins: 20, fats: 13, carbs: 0, price: 7.90 },
    "saumon fumé": { calories: 117, proteins: 18.4, fats: 4.3, carbs: 0, price: 19.90 },
    "thon en boîte": { calories: 116, proteins: 25, fats: 1, carbs: 0, price: 3.23 },
    "poisson blanc": { calories: 82, proteins: 18, fats: 0.7, carbs: 0, price: 2.5 },
    "aubergine": { calories: 25, proteins: 1, fats: 0.2, carbs: 5.9, price: 0.60 },
    "haricots verts": { calories: 31, proteins: 1.8, fats: 0.2, carbs: 7, price: 1.30 },
    "courgette": { calories: 17, proteins: 1.2, fats: 0.3, carbs: 3.1, price: 0.90 },
    "betterave": { calories: 43, proteins: 1.6, fats: 0.2, carbs: 9.6, price: 1.2 },
    "épinard": { calories: 23, proteins: 2.9, fats: 0.4, carbs: 3.6, price: 2.86 },
    "brocoli": { calories: 34, proteins: 2.8, fats: 0.4, carbs: 6.6, price: 1.84 },
    "carotte": { calories: 41, proteins: 0.9, fats: 0.2, carbs: 9.6, price: 1.44 },
    "tomate": { calories: 18, proteins: 0.9, fats: 0.2, carbs: 3.9, price: 1.00 },
    "poivron": { calories: 31, proteins: 1, fats: 0.3, carbs: 6, price: 0.60 },
    "laitue": { calories: 15, proteins: 1.4, fats: 0.2, carbs: 2.9, price: 0.60 },
    "chou": { calories: 25, proteins: 1.3, fats: 0.1, carbs: 5.8, price: 0.40 },
    "asperge": { calories: 20, proteins: 2.2, fats: 0.2, carbs: 3.9, price: 0 },
    "oignons": { calories: 38, proteins: 1.1, fats: 0.1, carbs: 6.7, price: 0.60 },
    "fenouil": { calories: 31, proteins: 1.2, fats: 0.2, carbs: 7.3, price: 1.00 },
    "patate douce": { calories: 86, proteins: 1.6, fats: 0.1, carbs: 20.1, price: 0.60 },
    "riz": { calories: 130, proteins: 2.4, fats: 0.3, carbs: 28, price: 1.00 },
    "blé": { calories: 327, proteins: 12.6, fats: 1.5, carbs: 72, price: 0.80 },
    "quinoa": { calories: 120, proteins: 4.1, fats: 1.9, carbs: 21.3, price: 3.00 },
    "pâtes": { calories: 349, proteins: 5, fats: 1.1, carbs: 25, price: 1.00 },
    "pomme de terre": { calories: 77, proteins: 2, fats: 0.1, carbs: 17, price: 0.40 },
    "couscous": { calories: 112, proteins: 3.8, fats: 0.2, carbs: 23, price: 1.00 },
    "gnocchis": { calories: 130, proteins: 3.5, fats: 2.5, carbs: 25, price: 1.58 },
    "pomme": { calories: 52, proteins: 0.3, fats: 0.2, carbs: 14, price: 0.80 },
    "poire": { calories: 57, proteins: 0.4, fats: 0.1, carbs: 15.2, price: 1.00 },
    "banane": { calories: 89, proteins: 1.1, fats: 0.3, carbs: 22.8, price: 0.50 },
    "orange": { calories: 47, proteins: 0.9, fats: 0.1, carbs: 11.8, price: 0.50 },
    "fraise": { calories: 32, proteins: 0.7, fats: 0.3, carbs: 7.7, price: 3.14 },
    "raisin": { calories: 69, proteins: 0.6, fats: 0.2, carbs: 17.2, price: 1.90 },
    "mangue": { calories: 60, proteins: 0.8, fats: 0.4, carbs: 15, price: 1.30 },
    "ananas": { calories: 50, proteins: 0.5, fats: 0.1, carbs: 13.1, price: 3.12 },
    "kiwi": { calories: 61, proteins: 1, fats: 0.5, carbs: 14.7, price: 1.60 },
    "melon": { calories: 34, proteins: 0.8, fats: 0.2, carbs: 8.3, price: 0.60 },
    "cerise": { calories: 63, proteins: 1, fats: 0.2, carbs: 16, price: 4.16 },
    "pêche": { calories: 39, proteins: 0.9, fats: 0.3, carbs: 9.5, price: 1.40 },
    "abricot": { calories: 48, proteins: 1.4, fats: 0.4, carbs: 11.1, price: 0 },
    "framboise": { calories: 52, proteins: 1.2, fats: 0.6, carbs: 11.9, price: 0 },
    "myrtille": { calories: 57, proteins: 0.7, fats: 0.3, carbs: 14.5, price: 4.20 },
    "litchi": { calories: 66, proteins: 0.8, fats: 0.4, carbs: 16.5, price: 3.80 },
    "avocat": { calories: 160, proteins: 2, fats: 15, carbs: 9, price: 0.6 },
    "concombre": { calories: 15, proteins: 0.7, fats: 0.1, carbs: 3.6, price: 0.8 },
    "crevettes": { calories: 100, proteins: 24, fats: 0.3, carbs: 0, price: 10.00 },
    "crème speculoos": { calories: 530, proteins: 2.8, fats: 31, carbs: 57, price: 5.30 },
    "fromage à tartiner": { calories: 158, proteins: 6.3, fats: 12, carbs: 1.5, price: 5.20 },
    "cacao": { calories: 247, proteins: 23, fats: 13, carbs: 25, price: 2.9 },
    "café en poudre": { calories: 2, proteins: 0.1, fats: 0, carbs: 0.3, price: 5.0 },
    "sirop d'agave": { calories: 310, proteins: 0, fats: 0, carbs: 67, price: 5.00 },
    "farine": { calories: 364, proteins: 10, fats: 1, carbs: 76, price: 0.4 },
    "levure": { calories: 325, proteins: 45, fats: 7.6, carbs: 37, price: 3.0 },
    "pépites de chocolat": { calories: 500, proteins: 5, fats: 27, carbs: 65, price: 5.20 },
    "sirop d'érable": { calories: 286, proteins: 0, fats: 0, carbs: 67, price: 2.00 },
    "miel": { calories: 304, proteins: 0, fats: 0, carbs: 82, price: 4.80 },
    "beurre de cacahuète": { calories: 588, proteins: 25.1, fats: 49.9, carbs: 12.2, price: 2.5 },
    "sésame": { calories: 573, proteins: 17.7, fats: 49.7, carbs: 23.5, price: 3.00 },
    "mozzarella": { calories: 230, proteins: 17, fats: 22, carbs: 2, price: 10.5 },
    "maïs": { calories: 100, proteins: 3.5, fats: 1.2, carbs: 21.6, price: 1.5 },
    "fêta": { calories: 177, proteins: 15, fats: 14, carbs: 2.5, price: 12.4 },
    "pois-chiche": { calories: 164, proteins: 8.9, fats: 2.6, carbs: 27.4, price: 1.80 },
    "échalote": { calories: 72, proteins: 2.5, fats: 0.1, carbs: 16, price: 4.5 },
    "olive": { calories: 115, proteins: 0.8, fats: 10.7, carbs: 6.3, price: 4.7 }
};


const ingredients = []; // Liste des ingrédients ajoutés

// Ajout d'un ingrédient
document.getElementById("add-ingredient").addEventListener("click", () => {
    const ingredientInput = document.getElementById("ingredient").value.toLowerCase().trim();
    const quantityInput = parseFloat(document.getElementById("quantity").value);

    // Vérifie si l'ingrédient existe dans la base et si la quantité est valide
    if (ingredientData[ingredientInput] && quantityInput > 0) {
        ingredients.push({ name: ingredientInput, quantity: quantityInput });
        updateIngredientList();
        document.getElementById("ingredient").value = '';
        document.getElementById("quantity").value = '';
    } else {
        alert("Ingrédient inconnu ou quantité invalide.");
    }
});


// Fonction pour remplir le datalist avec les ingrédients disponibles
function updateDatalist() {
    const datalist = document.getElementById("ingredients-list");
    datalist.innerHTML = ''; // Efface les anciennes options
    for (const ingredient in ingredientData) {
        const option = document.createElement("option");
        option.value = ingredient; // Ajoute l'ingrédient comme valeur
        datalist.appendChild(option);
    }
}

// Met à jour le datalist lorsque la page est chargée
updateDatalist();



// Met à jour la liste des ingrédients affichée
function updateIngredientList() {
    const list = document.getElementById("ingredient-list");
    list.innerHTML = ''; // Efface l'ancienne liste
    ingredients.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.quantity}g/mL de ${item.name}`;

        // Crée le bouton de suppression
        const deleteButton = document.createElement("span");
        deleteButton.classList.add("delete-item");
        deleteButton.textContent = "✖";

        // Ajouter l'événement de suppression pour chaque ingrédient
        deleteButton.addEventListener("click", () => {
            ingredients.splice(index, 1); // Retire l'ingrédient de la liste
            updateIngredientList(); // Met à jour l'affichage de la liste
        });

        li.appendChild(deleteButton); // Ajoute la croix dans l'élément li
        list.appendChild(li);
    });
}


// Calcul des valeurs nutritionnelles
document.getElementById("calculate").addEventListener("click", () => {
    let totalCalories = 0, totalProteins = 0, totalFats = 0, totalCarbs = 0, totalPrice = 0;

    ingredients.forEach(item => {
        const data = ingredientData[item.name];
        const multiplier = item.quantity / 100; // Convertit en proportion
        totalCalories += data.calories * multiplier;
        totalProteins += data.proteins * multiplier;
        totalFats += data.fats * multiplier;
        totalCarbs += data.carbs * multiplier;
        totalPrice += data.price * multiplier;
    });

    // Affiche les résultats
    document.getElementById("calories").textContent = totalCalories.toFixed(2);
    document.getElementById("proteins").textContent = totalProteins.toFixed(2);
    document.getElementById("fats").textContent = totalFats.toFixed(2);
    document.getElementById("carbs").textContent = totalCarbs.toFixed(2);
    document.getElementById("price").textContent = totalPrice.toFixed(2);
});
