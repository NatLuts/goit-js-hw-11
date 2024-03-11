import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

let searchQuery;
const gallery = document.querySelector('.js-gallery ')
const form = document.querySelector('.js-search-form')
const loader = document.querySelector('.loader')

form.addEventListener("submit", onFormSubmit )

function onFormSubmit(e) {
    e.preventDefault();
    gallery.innerHTML = "";

    const searchQuery = e.currentTarget.elements['user-search-query'].value.trim();

    if (!searchQuery){
        showEmptyInputToast, hideLoader();
        return
    }

    getPhotos(searchQuery).then(res => {
        if (res.hits.length=== 0) return showErrorToast()

        gallery.innerHTML = createMarkup(res.hits);
    }).catch(console.log).finally(() => hideLoader());
    e.currentTarget.reset();

}


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  refreshLightbox();

  function refreshLightbox() {
    lightbox.refresh();
  }


  function showLoader() {
    return loader.classList.remove('is-hidden');
  }
  
  function hideLoader() {
    return loader.classList.add('is-hidden');
  }

function showEmptyInputToast() {
    return iziToast.error({
      title: '',
      backgroundColor: '#c55f5f',
      titleColor: '#fff',
      messageColor: '#fff',
      message: 'Please write your request',
      color: '#fff',
      position: 'topRight',
      progressBarColor: '#B51B1B',
    });
  }

  function showErrorToast(){
    return iziToast.error({
     title: '',
    backgroundColor: '#EF4040',
    titleColor: '#fff',
          messageColor: '#fff',
          message:
            'Sorry, there are no images matching <br/> your search query. Please, try again!',
          color: '#fff',
          position: 'topRight',
          progressBarColor: '#B51B1B',
        });
      }

     