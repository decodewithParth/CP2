"use strict";

import { fetchData } from "./api.js";
import { getTime } from "./module.js";

const $detailContainer = document.querySelector("[data-detail-container]");

ACCESS_POINT += `/${window.location.search.slice(window.location.search.indexOf("=") + 1)}`;

fetchData(null, data => {
    console.log(data);

    const {
        images: { LARGE, REGULAR, SMALL, THUMBNAIL },
        label: title,
        source: author,
        ingredients = [],
        totalTime: cookingTime = 0,
        calories = 0,
        cuisineType = [],
        dietLabels = [],
        dishType = [],
        yield: servings = 0,
        ingredientsLines = [],
        uri
    } = data.recipe;

    document.title = `${title} - Tasty Table`;
    const banner = LARGE ?? REGULAR ?? SMALL ?? THUMBNAIL;
    const { url: bannerUrl, width, height } = banner;
    const tags = [...cuisineType, ...dietLabels, ...dishType];

    let tagElements = "";
    let ingredientItems = "";

    const recipeId = uri.slice(uri.lastIndexOf("_") + 1);
    const isSaved = window.localStorage.getItem(`cookio-recipe${recipeId}`);

    tags.map(tag => {
        let type = "";

        if (cuisineType.includes(tag)) {
            type = "cuisineType";
        }

        else if (dietLabels.includes(tag)) {
            type = "diet";
        }

        else {
            type = "dishType";
        }

        tagElements += `
        <a href="./recipes.html?${type}=${tag.toLowerCase()}" class="filter-chip label-large has-state">${tag}</a>`
    })

    ingredients.map(ingredient => {

    });



})