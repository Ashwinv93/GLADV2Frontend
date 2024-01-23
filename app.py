from flask import Flask, render_template
from clash_royale_library import ClashRoyaleCard, get_card_info

app = Flask(__name__)

# Example Clash Royale Cards
electric_sparkler = ClashRoyaleCard(
    name="Electric Sparkler",
    rarity="Epic",
    elixir_cost=4,
    description="A dazzling card that electrifies the battlefield. Click on the card to reveal its shocking secrets!",
    hitpoints=800,
    damage=120,
    attack_speed=1.5,
    targets="Ground and Air",
    range=4.5
)

fireball_blaster = ClashRoyaleCard(
    name="Fireball Blaster",
    rarity="Rare",
    elixir_cost=3,
    description="Launches fireballs with explosive force. Handle with care!",
    hitpoints=600,
    damage=180,
    attack_speed=2.0,
    targets="Ground",
    range=5.0
)

# Route to display card information
@app.route('/')
def display_card_info():
    card_info1 = get_card_info(electric_sparkler)
    card_info2 = get_card_info(fireball_blaster)
    return render_template('index.html', card_info1=card_info1, card_info2=card_info2)

if __name__ == '__main__':
    app.run(debug=True)
