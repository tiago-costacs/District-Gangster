  // Carrinho
  document.addEventListener("click", (e) => {
    const dec = e.target.closest("[data-dec]");
    const inc = e.target.closest("[data-inc]");
    if (dec || inc) {
      const wrap = e.target.closest(".qty");
      const input = wrap.querySelector("input[type='number']");
      let val = parseInt(input.value || "1", 10);
      val = inc ? val + 1 : Math.max(1, val - 1);
      input.value = val;
    }
    if (e.target.classList.contains("remove")) {
      e.target.closest(".cart-item")?.remove();
    }
  });
});

