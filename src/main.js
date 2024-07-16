import request from "./js/pixabay-api";
import markUpMaker from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const LMbutton = document.querySelector('.load-more button')

form.addEventListener('submit', submitList);

let page;
let q;

async function submitList(evt) {
    evt.preventDefault();
    gallery.innerHTML = `<span class="loader"></span>`;
    LMbutton.style.display = "";
    LMbutton.removeEventListener('click', loudMore);
    q = encodeURIComponent(form.imgName.value.trim());
    page = 1;

    try {
        const response = await request(q);
        gallery.innerHTML = "";
        markUpMaker(response.data.hits);
        console.log(response);
        if (response.data.totalHits > 15) {
            LMbutton.style.display = "inline-block";
            LMbutton.addEventListener('click', loudMore);
        }
    } catch (error) {
        console.error(error);
        iziToast.error({
            message: error.message
        })
    } finally {
        form.reset();
    }

}

async function loudMore () {
    page += 1;
    console.log(page);
    try {
        const response = await request(q, page);
        markUpMaker(response.data.hits);
        console.log(response);
        const heightOfEl = document.querySelector(".gallery a").getBoundingClientRect().height;
        window.scrollBy({
            top: heightOfEl*2,
            behavior: "smooth",
        });
        if (!(response.data.totalHits - page*15 > 0)) {
            LMbutton.style.display = "";
            LMbutton.removeEventListener('click', loudMore);
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results."
            })
        }
    } catch (error) {
        console.error(error);
        iziToast.error({
            message: error.message
        })
    }

}