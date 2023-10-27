function downloadCVHandler() {
    document.querySelector(".general-info").classList.add("hidden");
    document.querySelector(".education").classList.add("hidden");
    document.querySelector(".practice").classList.add("hidden");
    document.querySelector(".download-section").classList.add("hidden");
    window.print();
    document.querySelector(".general-info").classList.remove("hidden");
    document.querySelector(".education").classList.remove("hidden");
    document.querySelector(".practice").classList.remove("hidden");
    document.querySelector(".download-section").classList.remove("hidden");
}

export default downloadCVHandler;