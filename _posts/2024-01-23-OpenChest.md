---
toc: false
comments: true
layout: post
title: Chest Open
courses: { timebox: {week: 2} }
type: tangibles	
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .card {
      width: 200px;
      height: 300px;
      perspective: 1000px;
      display: inline-block;
      margin: 10px;
    }
    .card-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      cursor: pointer;
    }
    .card.flipped .card-inner {
      transform: rotateY(180deg);
    }
    .card-front, .card-back {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px;
    }
    .card-front {
      background-color: #607EE2;
      font-size: 18px;
      color: white;
    }
    .card-back {
      background-color: #607EE2;
      transform: rotateY(180deg);
      font-size: 12px;
      color: white;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>

<body>
  <div style="text-align: center;">
    <div id="initialImageContainer" style="display: inline-block;">
      <img id="initialImage" src="data:image/jpeg;base64,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" alt="Initial Image" style="cursor: pointer;">
    </div>
    <div id="chestImageContainer" style="display: inline-block; margin-left: 20px;">
      <img id="chestImage" src="data:image/jpeg;base64,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" alt="Chest Image" style="cursor: pointer;">
    </div>
  </div>
  <div id="cardContainer" style="text-align: center; display: none;"></div>
  <button id="resetButton" style="display: none;">Reset</button>

  <!-- Collection Section -->
  <div id="collection">
    <h2>My Collection</h2>
    <div id="collectionCards"></div>
  </div>

  <script>
    // Define card data
    var cardData = {
    "items": [
                {
      "name": "Knight",
      "id": 26000000,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
      },
      "rarity": "common"
    },
    {
      "name": "Archers",
      "id": 26000001,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
      },
      "rarity": "common"
    },
    {
      "name": "Goblins",
      "id": 26000002,
      "maxLevel": 14,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
      },
      "rarity": "common"
    },
    {
      "name": "Giant",
      "id": 26000003,
      "maxLevel": 12,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
      },
      "rarity": "rare"
    },
    {
      "name": "P.E.K.K.A",
      "id": 26000004,
      "maxLevel": 9,
      "elixirCost": 7,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Minions",
      "id": 26000005,
      "maxLevel": 14,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
      },
      "rarity": "common"
    },
    {
      "name": "Balloon",
      "id": 26000006,
      "maxLevel": 9,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Witch",
      "id": 26000007,
      "maxLevel": 9,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Barbarians",
      "id": 26000008,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png"
      },
      "rarity": "common"
    },
    {
      "name": "Golem",
      "id": 26000009,
      "maxLevel": 9,
      "elixirCost": 8,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/npdmCnET7jmVjJvjJQkFnNSNnDxYHDBigbvIAloFMds.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Skeletons",
      "id": 26000010,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 1,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
      },
      "rarity": "common"
    },
    {
      "name": "Valkyrie",
      "id": 26000011,
      "maxLevel": 12,
      "maxEvolutionLevel": 1,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Skeleton Army",
      "id": 26000012,
      "maxLevel": 9,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Bomber",
      "id": 26000013,
      "maxLevel": 14,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png"
      },
      "rarity": "common"
    },
    {
      "name": "Musketeer",
      "id": 26000014,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Baby Dragon",
      "id": 26000015,
      "maxLevel": 9,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Prince",
      "id": 26000016,
      "maxLevel": 9,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/3JntJV62aY0G1Qh6LIs-ek-0ayeYFY3VItpG7cb9I60.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Wizard",
      "id": 26000017,
      "maxLevel": 12,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Mini P.E.K.K.A",
      "id": 26000018,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Fmltc4j3Ve9vO_xhHHPEO3PRP3SmU2oKp2zkZQHRZT4.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Spear Goblins",
      "id": 26000019,
      "maxLevel": 14,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/FSDFotjaXidI4ku_WFpVCTWS1hKGnFh1sxX0lxM43_E.png"
      },
      "rarity": "common"
    },
    {
      "name": "Giant Skeleton",
      "id": 26000020,
      "maxLevel": 9,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Nigger",
      "id": 26000021,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Hog Rider",
      "id": 26000021,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Minion Horde",
      "id": 26000022,
      "maxLevel": 14,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png"
      },
      "rarity": "common"
    },
    {
      "name": "Ice Wizard",
      "id": 26000023,
      "maxLevel": 6,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Royal Giant",
      "id": 26000024,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png"
      },
      "rarity": "common"
    },
    {
      "name": "Guards",
      "id": 26000025,
      "maxLevel": 9,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Princess",
      "id": 26000026,
      "maxLevel": 6,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Dark Prince",
      "id": 26000027,
      "maxLevel": 9,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Three Musketeers",
      "id": 26000028,
      "maxLevel": 12,
      "elixirCost": 9,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Lava Hound",
      "id": 26000029,
      "maxLevel": 6,
      "elixirCost": 7,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/unicRQ975sBY2oLtfgZbAI56ZvaWz7azj-vXTLxc0r8.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Ice Spirit",
      "id": 26000030,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 1,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
      },
      "rarity": "common"
    },
    {
      "name": "Fire Spirit",
      "id": 26000031,
      "maxLevel": 14,
      "elixirCost": 1,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/16-BqusVvynIgYI8_Jci3LDC-r8AI_xaIYLgXqtlmS8.png"
      },
      "rarity": "common"
    },
    {
      "name": "Miner",
      "id": 26000032,
      "maxLevel": 6,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Sparky",
      "id": 26000033,
      "maxLevel": 6,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/2GKMkBrArZXgQxf2ygFjDs4VvGYPbx8F6Lj_68iVhIM.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Bowler",
      "id": 26000034,
      "maxLevel": 9,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/SU4qFXmbQXWjvASxVI6z9IJuTYolx4A0MKK90sTIE88.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Lumberjack",
      "id": 26000035,
      "maxLevel": 6,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Battle Ram",
      "id": 26000036,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Inferno Dragon",
      "id": 26000037,
      "maxLevel": 6,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Ice Golem",
      "id": 26000038,
      "maxLevel": 12,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Mega Minion",
      "id": 26000039,
      "maxLevel": 12,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Dart Goblin",
      "id": 26000040,
      "maxLevel": 12,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Goblin Gang",
      "id": 26000041,
      "maxLevel": 14,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
      },
      "rarity": "common"
    },
    {
      "name": "Electro Wizard",
      "id": 26000042,
      "maxLevel": 6,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Elite Barbarians",
      "id": 26000043,
      "maxLevel": 14,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/C88C5JH_F3lLZj6K-tLcMo5DPjrFmvzIb1R2M6xCfTE.png"
      },
      "rarity": "common"
    },
    {
      "name": "Hunter",
      "id": 26000044,
      "maxLevel": 9,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Executioner",
      "id": 26000045,
      "maxLevel": 9,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/9XL5BP2mqzV8kza6KF8rOxrpCZTyuGLp2l413DTjEoM.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Bandit",
      "id": 26000046,
      "maxLevel": 6,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/QWDdXMKJNpv0go-HYaWQWP6p8uIOHjqn-zX7G0p3DyM.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Royal Recruits",
      "id": 26000047,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 7,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/jcNyYGUiXXNz3kuz8NBkHNKNREQKraXlb_Ts7rhCIdM.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/jcNyYGUiXXNz3kuz8NBkHNKNREQKraXlb_Ts7rhCIdM.png"
      },
      "rarity": "common"
    },
    {
      "name": "Night Witch",
      "id": 26000048,
      "maxLevel": 6,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Bats",
      "id": 26000049,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
      },
      "rarity": "common"
    },
    {
      "name": "Royal Ghost",
      "id": 26000050,
      "maxLevel": 6,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Ram Rider",
      "id": 26000051,
      "maxLevel": 6,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/QaJyerT7f7oMyZ3Fv1glKymtLSvx7YUXisAulxl7zRI.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Zappies",
      "id": 26000052,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Rascals",
      "id": 26000053,
      "maxLevel": 14,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/KV48DfwVHKx9XCjzBdk3daT_Eb52Me4VgjVO7WctRc4.png"
      },
      "rarity": "common"
    },
    {
      "name": "Cannon Cart",
      "id": 26000054,
      "maxLevel": 9,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Mega Knight",
      "id": 26000055,
      "maxLevel": 6,
      "elixirCost": 7,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Skeleton Barrel",
      "id": 26000056,
      "maxLevel": 14,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
      },
      "rarity": "common"
    },
    {
      "name": "Flying Machine",
      "id": 26000057,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/hzKNE3QwFcrSrDDRuVW3QY_OnrDPijSiIp-PsWgFevE.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Wall Breakers",
      "id": 26000058,
      "maxLevel": 9,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/_xPphEfC8eEwFNrfU3cMQG9-f5JaLQ31ARCA7l3XtW4.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Royal Hogs",
      "id": 26000059,
      "maxLevel": 12,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Goblin Giant",
      "id": 26000060,
      "maxLevel": 9,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/SoW16cY3jXBwaTDvb39DkqiVsoFVaDWbzf5QBYphJrY.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Fisherman",
      "id": 26000061,
      "maxLevel": 6,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Magic Archer",
      "id": 26000062,
      "maxLevel": 6,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Electro Dragon",
      "id": 26000063,
      "maxLevel": 9,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/tN9h6lnMNPCNsx0LMFmvpHgznbDZ1fBRkx-C7UfNmfY.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Firecracker",
      "id": 26000064,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/c1rL3LO1U2D9-TkeFfAC18gP3AO8ztSwrcHMZplwL2Q.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/c1rL3LO1U2D9-TkeFfAC18gP3AO8ztSwrcHMZplwL2Q.png"
      },
      "rarity": "common"
    },
    {
      "name": "Mighty Miner",
      "id": 26000065,
      "maxLevel": 4,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Cd9R56yraxTvJiD8xJ2qT2OdsHyh94FqOAarXpbyelo.png"
      },
      "rarity": "champion"
    },
    {
      "name": "Elixir Golem",
      "id": 26000067,
      "maxLevel": 12,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/puhMsZjCIqy21HW3hYxjrk_xt8NIPyFqjRy-BeLKZwo.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Battle Healer",
      "id": 26000068,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/KdwXcoigS2Kg-cgA7BJJIANbUJG6SNgjetRQ-MegZ08.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Skeleton King",
      "id": 26000069,
      "maxLevel": 4,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
      },
      "rarity": "champion"
    },
    {
      "name": "Archer Queen",
      "id": 26000072,
      "maxLevel": 4,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/p7OQmOAFTery7zCzlpDdm-LOD1kINTm42AwIHchZfWk.png"
      },
      "rarity": "champion"
    },
    {
      "name": "Golden Knight",
      "id": 26000074,
      "maxLevel": 4,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/WJd207D0O1sN-l1FTb8P9KhYL2oF5jY26vRUfTUW3FQ.png"
      },
      "rarity": "champion"
    },
    {
      "name": "Monk",
      "id": 26000077,
      "maxLevel": 4,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
      },
      "rarity": "champion"
    },
    {
      "name": "Skeleton Dragons",
      "id": 26000080,
      "maxLevel": 14,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/qPOtg9uONh47_NLxGhhFc_ww9PlZ6z3Ry507q1NZUXs.png"
      },
      "rarity": "common"
    },
    {
      "name": "Mother Witch",
      "id": 26000083,
      "maxLevel": 6,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Electro Spirit",
      "id": 26000084,
      "maxLevel": 14,
      "elixirCost": 1,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/WKd4-IAFsgPpMo7dDi9sujmYjRhOMEWiE07OUJpvD9g.png"
      },
      "rarity": "common"
    },
    {
      "name": "Electro Giant",
      "id": 26000085,
      "maxLevel": 9,
      "elixirCost": 7,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Phoenix",
      "id": 26000087,
      "maxLevel": 6,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Little Prince",
      "id": 26000093,
      "maxLevel": 4,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/dY-gSseki6KBpkIG17safHH5YlB8SErFZO9OXbJxf9w.png"
      },
      "rarity": "champion"
    },
    {
      "name": "Cannon",
      "id": 27000000,
      "maxLevel": 14,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png"
      },
      "rarity": "common"
    },
    {
      "name": "Goblin Hut",
      "id": 27000001,
      "maxLevel": 12,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/l8ZdzzNLcwB4u7ihGgxNFQOjCT_njFuAhZr7D6PRF7E.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Mortar",
      "id": 27000002,
      "maxLevel": 14,
      "maxEvolutionLevel": 1,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
        "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
      },
      "rarity": "common"
    },
    {
      "name": "Inferno Tower",
      "id": 27000003,
      "maxLevel": 12,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Bomb Tower",
      "id": 27000004,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Barbarian Hut",
      "id": 27000005,
      "maxLevel": 12,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/ho0nOG2y3Ch86elHHcocQs8Fv_QNe0cFJ2CijsxABZA.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Tesla",
      "id": 27000006,
      "maxLevel": 14,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png"
      },
      "rarity": "common"
    },
    {
      "name": "Elixir Collector",
      "id": 27000007,
      "maxLevel": 12,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png"
      },
      "rarity": "rare"
    },
    {
      "name": "X-Bow",
      "id": 27000008,
      "maxLevel": 9,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/zVQ9Hme1hlj9Dc6e1ORl9xWwglcSrP7ejow5mAhLUJc.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Tombstone",
      "id": 27000009,
      "maxLevel": 12,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Furnace",
      "id": 27000010,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Goblin Cage",
      "id": 27000012,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/vD24bBgK4rSq7wx5QEbuqChtPMRFviL_ep76GwQw1yA.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Goblin Drill",
      "id": 27000013,
      "maxLevel": 9,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/eN2TKUYbih-26yBi0xy5LVFOA0zDftgDqxxnVfdIg1o.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Fireball",
      "id": 28000000,
      "maxLevel": 12,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Arrows",
      "id": 28000001,
      "maxLevel": 14,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
      },
      "rarity": "common"
    },
    {
      "name": "Rage",
      "id": 28000002,
      "maxLevel": 9,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Rocket",
      "id": 28000003,
      "maxLevel": 12,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Goblin Barrel",
      "id": 28000004,
      "maxLevel": 9,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Freeze",
      "id": 28000005,
      "maxLevel": 9,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/I1M20_Zs_p_BS1NaNIVQjuMJkYI_1-ePtwYZahn0JXQ.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Mirror",
      "id": 28000006,
      "maxLevel": 9,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Lightning",
      "id": 28000007,
      "maxLevel": 9,
      "elixirCost": 6,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Zap",
      "id": 28000008,
      "maxLevel": 14,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
      },
      "rarity": "common"
    },
    {
      "name": "Poison",
      "id": 28000009,
      "maxLevel": 9,
      "elixirCost": 4,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Graveyard",
      "id": 28000010,
      "maxLevel": 6,
      "elixirCost": 5,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "The Log",
      "id": 28000011,
      "maxLevel": 6,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
      },
      "rarity": "legendary"
    },
    {
      "name": "Tornado",
      "id": 28000012,
      "maxLevel": 9,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Clone",
      "id": 28000013,
      "maxLevel": 9,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/mHVCet-1TkwWq-pxVIU2ZWY9_2z7Z7wtP25ArEUsP_g.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Earthquake",
      "id": 28000014,
      "maxLevel": 12,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/XeQXcrUu59C52DslyZVwCnbi4yamID-WxfVZLShgZmE.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Barbarian Barrel",
      "id": 28000015,
      "maxLevel": 9,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
      },
      "rarity": "epic"
    },
    {
      "name": "Heal Spirit",
      "id": 28000016,
      "maxLevel": 12,
      "elixirCost": 1,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/GITl06sa2nGRLPvboyXbGEv5E3I-wAwn1Eqa5esggbc.png"
      },
      "rarity": "rare"
    },
    {
      "name": "Giant Snowball",
      "id": 28000017,
      "maxLevel": 14,
      "elixirCost": 2,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/7MaJLa6hK9WN2_VIshuh5DIDfGwm0wEv98gXtAxLDPs.png"
      },
      "rarity": "common"
    },
    {
      "name": "Royal Delivery",
      "id": 28000018,
      "maxLevel": 14,
      "elixirCost": 3,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/LPg7AGjGI3_xmi7gLLgGC50yKM1jJ2teWkZfoHJcIZo.png"
      },
      "rarity": "common"
    }
            ],
            "supportItems": [
              {
      "name": "Tower Princess",
      "id": 159000000,
      "maxLevel": 14,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/Nzo5Gjbh7NG6O3Hyu7ev54Pu5zK7vDMR2fbpGdVsS64.png"
      },
      "rarity": "common"
    },
    {
      "name": "Cannoneer",
      "id": 159000001,
      "maxLevel": 9,
      "iconUrls": {
        "medium": "https://api-assets.clashroyale.com/cards/300/cUfU4UowRdbIiRvxv0ns4ezQUNndJTy7D2q4I_K_fzg.png"
      },
      "rarity": "epic"
    }
    ]
    };
    // Function to create a card element
    function createCard(card, isFlipped, isInCollection) {
      var cardElement = document.createElement("div");
      cardElement.classList.add("card");

      var cardInner = document.createElement("div");
      cardInner.classList.add("card-inner");

      var cardFront = document.createElement("div");
      cardFront.classList.add("card-front");
      cardFront.innerHTML = `<img src="${card.iconUrls.medium}" alt="${card.name}">`;

      var cardBack = document.createElement("div");
      cardBack.classList.add("card-back");
      cardBack.innerHTML = `
        <p>Name: ${card.name}</p>
        <p>Elixir Cost: ${card.elixirCost}</p>
        <p>Max Level: ${card.maxLevel}</p>
        <p>Rarity: ${card.rarity}</p>
      `;

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      cardElement.appendChild(cardInner);

      if (isFlipped) {
        cardElement.classList.add("flipped");
      }

      // Add click event listener to flip the card
      cardElement.addEventListener("click", function() {
        cardElement.classList.toggle("flipped");
      });

      if (isInCollection) {
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove from Collection";
        removeButton.onclick = function() {
          removeFromCollection(card.name);
        };
        cardBack.appendChild(removeButton);
      } else {
        var addButton = document.createElement("button");
        addButton.textContent = "Add to Collection";
        addButton.onclick = function() {
          addToCollection(card.name);
        };
        cardBack.appendChild(addButton);
      }

      return cardElement;
    }

    // Function to display cards
    function displayChestCards(cardCount, rarityProbabilities) {
      var chestImageContainer = document.getElementById("chestImageContainer");
      chestImageContainer.style.display = "none";

      var cardContainer = document.getElementById("cardContainer");
      cardContainer.style.display = "block";
      cardContainer.innerHTML = "";

      // Select cards based on rarity probabilities
      var selectedCards = [];
      while (selectedCards.length < cardCount) {
        var randomIndex = Math.floor(Math.random() * rarityProbabilities.length);
        var rarity = rarityProbabilities[randomIndex];
        var filteredCards = cardData.items.filter(function(card) {
          return card.rarity === rarity;
        });
        if (filteredCards.length > 0) {
          var randomCardIndex = Math.floor(Math.random() * filteredCards.length);
          selectedCards.push(filteredCards[randomCardIndex]);
        }
      }

      selectedCards.forEach(function(card) {
        var cardElement = createCard(card, false, false);
        cardContainer.appendChild(cardElement);
      });

      document.getElementById("resetButton").style.display = "inline"; // Show the reset button
    }

    // Function to reset the display to the initial image
    function resetDisplay() {
      var initialImageContainer = document.getElementById("initialImageContainer");
      initialImageContainer.style.display = "inline-block";

      var chestImageContainer = document.getElementById("chestImageContainer");
      chestImageContainer.style.display = "inline-block";

      var cardContainer = document.getElementById("cardContainer");
      cardContainer.style.display = "none";
      cardContainer.innerHTML = "";

      document.getElementById("resetButton").style.display = "none"; // Hide the reset
    }

    // Function to add card to the collection
    function addToCollection(cardName) {
      var collectionCards = document.getElementById("collectionCards");
      var card = cardData.items.find(function(card) {
        return card.name === cardName;
      });
      var cardElement = createCard(card, true, true);
      collectionCards.appendChild(cardElement);
    }

    // Function to remove card from the collection
    function removeFromCollection(cardName) {
      var collectionCards = document.getElementById("collectionCards");
      var cardElement = Array.from(collectionCards.children).find(function(child) {
        return child.querySelector(".card-back p").textContent.includes(cardName);
      });
      if (cardElement) {
        cardElement.remove();
      }
    }

    // Add click event listener to display cards when the initial image is clicked
    document.getElementById("initialImage").addEventListener("click", function() {
      var initialImageContainer = document.getElementById("initialImageContainer");
      initialImageContainer.style.display = "none";
      displayChestCards(8, ["common", "common", "common", "common", "rare", "rare", "epic", "epic", "epic", "legendary"]); // Open chest with 8 cards
    });

    // Add click event listener to display cards when the chest image is clicked
    document.getElementById("chestImage").addEventListener("click", function() {
      var chestImageContainer = document.getElementById("chestImageContainer");
      chestImageContainer.style.display = "none";
      displayChestCards(4, ["epic", "epic", "epic", "legendary", "champion"]); // Open chest with 4 cards
    });

    // Add click event listener to reset the display when the reset button is clicked
    document.getElementById("resetButton").addEventListener("click", resetDisplay);
  </script>
</body>
</html>
