function openModal(title, content) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDetails').innerHTML = content; // ✅ Correct
  document.getElementById('recipeModal').classList.remove('hidden');
}

function showBrownie() {
  const title = "Brownie";
  const content = `
    <strong>Ingredients:</strong><br>
    • 1/2 cup unsalted butter, melted and HOT<br>
    • 1 tbsp olive oil or coconut oil<br>
    • 1 1/8 cup superfine or granulated sugar<br>
    • 2 large eggs<br>
    • 2 tsp pure vanilla extract<br>
    • 1/2 cup all-purpose flour<br>
    • 1/2 cup cocoa powder<br>
    • 1/4 tsp salt<br><br>

    <strong>Instructions:</strong><br>
    1. Preheat oven to 350ºF (175ºC).<br>
    2. Grease an 8-inch square pan.<br>
    3. Line with parchment paper and set aside.<br>
    4. Whisk butter, oil, and sugar.<br>
    5. Add eggs and vanilla; beat until light.<br>
    6. Sift in flour, cocoa, salt. Fold gently.<br>
    7. Pour into pan, smooth top.<br>
    8. Bake for 20–25 mins until just set.<br>
    9. Cool and slice into 16 brownies.
  `;
  openModal(title, content);
}
function showKozhikodanBiriyani() {
  const title = "Kozhikodan Chicken Biryani";
  const content = `
    <strong>Ingredients</strong><br><br>
    <u>For Biryani Rice:</u><br>
    ▢ 6 cups Basmati or Jeerakasala rice<br>
    ▢ 4 tsp Ghee or Clarified Butter<br>
    ▢ 4 tsp Oil<br>
    ▢ 5-6 Cloves<br>
    ▢ 3-4 Cinnamon (small pieces)<br>
    ▢ 2 Bay leaves<br>
    ▢ 5-6 Cardamoms<br>
    ▢ ½ Onion (diced)<br>
    ▢ 2 tsp Salt or to taste<br>
    ▢ 5 cups Water<br><br>

    <u>For Chicken Marination:</u><br>
    ▢ 1½ lbs Chicken (cut into pieces)<br>
    ▢ 3 cups Yogurt<br>
    ▢ 1½ cups Coriander leaves (chopped)<br>
    ▢ 1 cup Mint leaves (chopped)<br>
    ▢ 3 medium Tomatoes (chopped)<br>
    ▢ 1 tsp Turmeric powder<br>
    ▢ 1 tsp Biryani Masala (optional)<br>
    ▢ ½ tsp Garam Masala<br>
    ▢ 1 medium Lemon (juiced)<br>
    ▢ 1 tsp Salt<br><br>

    <u>To Powder for Marinade:</u><br>
    ▢ 1½ tsp Cumin seeds<br>
    ▢ 2 tbsp Coriander seeds<br>
    ▢ 1½ tsp Fennel seeds<br><br>

    <u>To Grind for Marinade:</u><br>
    ▢ 1 inch Ginger<br>
    ▢ 10-12 cloves Garlic<br>
    ▢ 10-15 Green chillies (adjust to taste)<br>
    ▢ 2 tsp Poppy seeds<br><br>

    <u>For Chicken Preparation:</u><br>
    ▢ 4 tbsp Ghee or Oil<br>
    ▢ 3-4 inch Cinnamon sticks<br>
    ▢ 5-6 Cloves<br>
    ▢ 4-5 Cardamoms<br>
    ▢ 1 Nutmeg<br>
    ▢ 1 Bay leaf<br>
    ▢ 1 Tomato (diced)<br>
    ▢ 1 tsp Ginger-Garlic paste<br><br>

    <u>For Garnish:</u><br>
    ▢ 2 Onions (thin long strips)<br>
    ▢ 10 Cashews<br>
    ▢ 10 Raisins<br>
    ▢ 4 tbsp Ghee<br>
    ▢ 1 sprig Mint leaves (chopped)<br>
    ▢ 1 cup Coriander leaves (chopped)<br>
    ▢ 4 Boiled eggs (optional)<br><br>

    <strong>Instructions</strong><br><br>
    <u>Chicken Marination:</u><br>
    1. Wash meat with salt & lemon. Drain completely.<br>
    2. Powder ingredients in "to powder" section.<br>
    3. Grind ingredients in "to grind" section with minimal water.<br>
    4. Mix all marination ingredients with chicken. Marinate 2-3 hours in fridge.<br><br>

    <u>Rice & Garnish Prep:</u><br>
    5. Wash rice. Heat ghee/oil, fry onions till golden. Set aside.<br>
    6. Fry cashews & raisins, set aside for garnish.<br>
    7. In remaining ghee/oil, add whole spices from rice section.<br>
    8. Add diced onion, then rice. Fry 5–7 mins till opaque.<br>
    9. Add salt and water. Cook in rice cooker. Let cool.<br><br>

    <u>Chicken Cooking:</u><br>
    10. Heat oil/ghee, sauté onions 10 mins.<br>
    11. Add tomatoes & ginger garlic paste. Cook 5 mins.<br>
    12. Add marinated chicken. Cook till fully done.<br>
    13. Add coriander leaves & lemon juice.<br><br>

    <u>Layering:</u><br>
    14. In a deep bowl: layer rice → chicken → rice → garnish (onions, nuts, raisins, mint, coriander).<br>
    15. Mix gently.<br>
    16. Optionally, top with boiled eggs & a squeeze of lemon.<br><br>

     Serve hot with pappad, chutney, yogurt salad, or pickle.
  `;
  openModal(title, content);
}


function closeModal() {
  document.getElementById('recipeModal').classList.add('hidden');
}

function scrollToRecipes() {
  document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
}

function toggleRecipe(button) {
  const details = button.nextElementSibling;
  details.classList.toggle("hidden");
}

function filterRecipes(category) {
  const cards = document.querySelectorAll('.card');
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.classList.contains(category) ? 'block' : 'none';
    }
  });
}

