/* ===============================
   BREWTRACK — APP.JS (Updated: Inline add-ons qty)
================================*/

/* -----------------------
   Product, Add-ons & Inventory
------------------------*/
const products = [
  { id: 101, name: "Choco Hazelnut", price: 165, img: "assets/mocha.png", mainCategory: "bestsellers", subcategory: null },
  { id: 102, name: "Biscoff Latte", price: 170, img: "assets/latte.png", mainCategory: "bestsellers", subcategory: null },
  { id: 103, name: "Mac Caramel", price: 140, img: "assets/latte.png", mainCategory: "bestsellers", subcategory: null },
  { id: 104, name: "Oreo Latte", price: 170, img: "assets/mocha.png", mainCategory: "bestsellers", subcategory: null },
  { id: 105, name: "Dark Forest", price: 165, img: "assets/mocha.png", mainCategory: "bestsellers", subcategory: null },

  { id: 201, name: "Americano (Ice)", price: 85, hotPrice: 120, img: "assets/espresso.png", mainCategory: "coffee", subcategory: null },
  { id: 202, name: "Hazelnut Latte", price: 110, hotPrice: 160, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 203, name: "Vanilla Latte", price: 110, hotPrice: 160, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 204, name: "Latte", price: 105, hotPrice: 150, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 205, name: "Spanish Latte", price: 135, hotPrice: 165, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 206, name: "Mocha", price: 140, hotPrice: 170, img: "assets/mocha.png", mainCategory: "coffee", subcategory: null },
  { id: 207, name: "Strawberry Latte", price: 135, hotPrice: 165, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 208, name: "Dirty Matcha", price: 140, hotPrice: 170, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 209, name: "Salted Caramel Latte", price: 135, hotPrice: 165, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 210, name: "Salted Vanilla Latte", price: 135, hotPrice: 165, img: "assets/latte.png", mainCategory: "coffee", subcategory: null },
  { id: 211, name: "Choco Caramel Latte", price: 160, hotPrice: 175, img: "assets/mocha.png", mainCategory: "coffee", subcategory: null },

  { id: 301, name: "Croissant", price: 150, img: "assets/croissant.png", mainCategory: "pastries", subcategory: null },

  { id: 401, name: "Red Velvet (Cream Cheese)", price: 135, img: "assets/latte.png", mainCategory: "noncoffee", subcategory: "creamcheese" },
  { id: 402, name: "Oreo (Cream Cheese)", price: 160, img: "assets/mocha.png", mainCategory: "noncoffee", subcategory: "creamcheese" },
  { id: 403, name: "Matcha (Cream Cheese)", price: 135, img: "assets/latte.png", mainCategory: "noncoffee", subcategory: "creamcheese" },

  { id: 411, name: "Matcha (Creamy)", price: 135, img: "assets/latte.png", mainCategory: "noncoffee", subcategory: "creamy" },
  { id: 412, name: "Strawberry Matcha (Creamy)", price: 140, img: "assets/latte.png", mainCategory: "noncoffee", subcategory: "creamy" },

  { id: 421, name: "Sparkling Strawberry", price: 70, img: "assets/latte.png", mainCategory: "noncoffee", subcategory: "soda" },
  { id: 422, name: "Sparkling Green Apple", price: 60, img: "assets/latte.png", mainCategory: "noncoffee", subcategory: "soda" }
];

const addOns = [
  { id: 1, name: "Oat Milk", price: 30 },
  { id: 2, name: "Espresso Shot", price: 30 },
  { id: 3, name: "Frappe", price: 50 }
];

const inventoryData = [
  { name: "Coffee Beans", stock: 12, unit: "kg", threshold: 5 },
  { name: "Milk", stock: 2, unit: "L", threshold: 3 },
  { name: "Sugar", stock: 9, unit: "kg", threshold: 4 },
  { name: "Cups", stock: 120, unit: "pcs", threshold: 40 }
];

/* -----------------------
   Safe DOM helpers
------------------------*/
function $(selector) { return document.querySelector(selector); }
function $all(selector) { return Array.from(document.querySelectorAll(selector)); }
function safeGet(id) { return document.getElementById(id) || null; }

/* -----------------------
   Elements
------------------------*/
const menuGrid = safeGet("menuGrid");
const nonCoffeeSubcats = safeGet("nonCoffeeSubcats");
const globalSearch = safeGet("globalSearch");
const ticketItemsEl = safeGet("ticketItems");
const subtotalEl = safeGet("subtotal");
const discountEl = safeGet("discount");
const totalEl = safeGet("total");
const notifListEl = safeGet("notifList");
const notifCountEl = safeGet("notifCount");
const inventoryTableEl = safeGet("inventoryTable");
const salesCanvas = safeGet("salesOverviewChart");
const salesFilter = safeGet("salesFilter");
const discountTypeGroup = safeGet("discountTypeGroup");
const cashReceivedEl = safeGet("cashReceived");
const changeDueEl = safeGet("changeDue");
const notifBtn = safeGet("notifBtn");
const notifPanel = safeGet("notifPanel");
const historyTableEl = safeGet("historyTable");
const historySearchEl = safeGet("historySearch");
const historyStartEl = safeGet("historyStart");
const historyEndEl = safeGet("historyEnd");
const signinForm = safeGet("signinForm");
const signinUserEl = safeGet("signinUser");
const signinRoleEl = safeGet("signinRole");
const signinPassEl = safeGet("signinPass");
const signoutBtn = safeGet("signoutBtn");
const signoutBtnSide = safeGet("signoutBtnSide");
const currentUserLabel = safeGet("currentUserLabel");
const currentUserLabelSide = safeGet("currentUserLabelSide");
const sidenav = safeGet("sidenav");
const mainContentEl = safeGet("main-content");
const notificationWrapper = safeGet("notificationWrapper");
const leftControls = document.querySelector(".left-controls");
const rightControls = document.querySelector(".right-controls");

const editBtn = safeGet("editInventoryBtn");
const saveBtn = safeGet("saveInventoryBtn");
const addBtn = safeGet("addInventoryBtn");
const payBtn = safeGet("payBtn");

/* -----------------------
   Escape helpers
------------------------*/
function escapeHtml(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function escapeAttr(s) { return String(s).replace(/"/g,"&quot;"); }

/* -----------------------
   Menu rendering
------------------------*/
function loadMenu({ mainCategory = "all", subcategory = "all", q = "" } = {}) {
  if (!menuGrid) return;
  menuGrid.innerHTML = "";
  const query = (q || "").trim().toLowerCase();

  const visible = products.filter(p => {
    if (mainCategory && mainCategory !== "all" && p.mainCategory !== mainCategory) return false;
    if (mainCategory === "noncoffee" && subcategory && subcategory !== "all" && p.subcategory !== subcategory) return false;
    if (query && !p.name.toLowerCase().includes(query)) return false;
    return true;
  });

  const frag = document.createDocumentFragment();
  visible.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
      <img src="${escapeAttr(item.img)}" class="menu-img" alt="${escapeAttr(item.name)}">
      <div class="menu-body">
        <div class="menu-name">${escapeHtml(item.name)}</div>
        <div class="menu-bottom">
          <span class="menu-price">₱${Number(item.price).toFixed(0)}</span>
          <button class="menu-add-btn" data-id="${item.id}" aria-label="Add ${escapeAttr(item.name)}">+</button>
        </div>
      </div>
    `;
    frag.appendChild(card);
  });
  menuGrid.appendChild(frag);
}

/* -----------------------
   Categories & Search
------------------------*/
function initCategoryUI() {
  const mainBtns = $all(".category-btn");
  const subBtns = $all(".subcat-btn");
  if (nonCoffeeSubcats) nonCoffeeSubcats.style.display = "none";

  mainBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      mainBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category || "all";
      if (category === "noncoffee") nonCoffeeSubcats.style.display = "flex";
      else nonCoffeeSubcats.style.display = "none";
      const activeSub = document.querySelector(".subcat-btn.active")?.dataset?.subcat || "all";
      const q = globalSearch ? globalSearch.value.trim() : "";
      loadMenu({ mainCategory: category, subcategory: activeSub, q });
    });
  });

  subBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      subBtns.forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      const activeMain = document.querySelector(".category-btn.active")?.dataset?.category || "noncoffee";
      const sub = btn.dataset.subcat || "all";
      const q = globalSearch ? globalSearch.value.trim() : "";
      loadMenu({ mainCategory: activeMain, subcategory: sub, q });
    });
  });
}

function initSearch() {
  if (!globalSearch) return;
  globalSearch.addEventListener("input", () => {
    const q = globalSearch.value.trim();
    const activeMain = document.querySelector(".category-btn.active")?.dataset?.category || "all";
    const activeSub = document.querySelector(".subcat-btn.active")?.dataset?.subcat || "all";
    loadMenu({ mainCategory: activeMain, subcategory: activeSub, q });
  });
}

/* -----------------------
   Ticket + Inline Add-ons (Qty-based)
------------------------*/
let ticket = []; let salesLedger = [];

function _addonsKey(addons) {
  // produce a stable key string for addons including quantities
  if (!addons || !addons.length) return "";
  // sort by id to keep deterministic
  return addons.slice().sort((a,b)=>a.id-b.id).map(a=>`${a.id}:${a.qty}`).join("|");
}

function findExistingTicketIndex(productId, addons) {
  // treat as same if product id and addons key matches
  const key = _addonsKey(addons);
  return ticket.findIndex(item => item.id === productId && _addonsKey(item.addons) === key);
}

function addItemToTicket(product) {
  // When adding from menu we default addons to empty (user can add later inline)
  const ticketItem = {
    id: product.id,
    name: product.name,
    basePrice: product.price,
    quantity: 1,
    addons: [] // each addon: { id, name, price, qty }
  };

  // if an identical item already exists (same product id, same addons quantities) -> increase quantity
  const idx = findExistingTicketIndex(ticketItem.id, ticketItem.addons);
  if (idx !== -1) {
    ticket[idx].quantity++;
  } else {
    ticket.push(ticketItem);
  }
  renderTicket();
}

function renderTicket() {
  if (!ticketItemsEl) return;
  ticketItemsEl.innerHTML = "";

  ticket.forEach((item, index) => {
    // Build inline add-ons HTML (quantity-based)
    const addonsHtml = addOns.map(a => {
      const existing = item.addons.find(ad => ad.id === a.id);
      const qty = existing ? existing.qty : 0;
      return `
        <div class="addon-row" data-addon-id="${a.id}">
          <div class="addon-name">${escapeHtml(a.name)} (+₱${a.price})</div>
          <div class="addon-controls">
            <button class="addon-qty-btn minus" data-ticket-index="${index}" data-addon-id="${a.id}" data-action="minus">−</button>
            <span class="addon-qty" data-ticket-index="${index}" data-addon-id="${a.id}">${qty}</span>
            <button class="addon-qty-btn plus" data-ticket-index="${index}" data-addon-id="${a.id}" data-action="plus">+</button>
          </div>
        </div>
      `;
    }).join("");

    const itemAddonIndicator = item.addons && item.addons.length ? ` · ${item.addons.reduce((s,a)=>s+a.qty,0)} add-on(s)` : "";

    const li = document.createElement("li");
    li.className = "ticket-row";
    li.innerHTML = `
      <div class="item-info">
        <strong>${escapeHtml(item.name)}</strong>
        <small>₱${(item.basePrice + (item.addons?.reduce((s,a)=>s + (a.qty * a.price),0)||0)).toFixed(0)}${itemAddonIndicator}</small>
        <div class="inline-addons" aria-hidden="true">${addonsHtml}</div>
        <button class="show-addons-btn" data-index="${index}">Add-ons ▾</button>
      </div>
      <div class="item-controls">
        <button class="qty-btn minus" data-index="${index}">−</button>
        <span class="qty">${item.quantity}</span>
        <button class="qty-btn plus" data-index="${index}">+</button>
        <button class="remove-btn" data-index="${index}">✕</button>
      </div>
    `;
    ticketItemsEl.appendChild(li);
  });

  updateTotals();
  renderBestsellerStats();
}

/* ----- Ticket Event Delegation ----- */
ticketItemsEl.addEventListener("click", (e) => {
  // item quantity plus/minus/remove (existing behavior)
  const plusBtn = e.target.closest(".qty-btn.plus");
  const minusBtn = e.target.closest(".qty-btn.minus");
  const remBtn = e.target.closest(".remove-btn");
  if (plusBtn) { const idx = parseInt(plusBtn.dataset.index, 10); if (!isNaN(idx)) { ticket[idx].quantity++; renderTicket(); } return; }
  if (minusBtn) { const idx = parseInt(minusBtn.dataset.index, 10); if (!isNaN(idx)) { ticket[idx].quantity--; if (ticket[idx].quantity <= 0) ticket.splice(idx, 1); renderTicket(); } return; }
  if (remBtn) { const idx = parseInt(remBtn.dataset.index, 10); if (!isNaN(idx)) { ticket.splice(idx, 1); renderTicket(); } return; }

  // show-addons toggle
  const showBtn = e.target.closest(".show-addons-btn");
  if (showBtn) {
    const idx = parseInt(showBtn.dataset.index, 10);
    if (isNaN(idx)) return;
    const row = ticketItemsEl.children[idx];
    if (!row) return;
    const inline = row.querySelector(".inline-addons");
    if (!inline) return;
    const isOpen = inline.classList.toggle("active");
    inline.style.display = isOpen ? "block" : "none";
    showBtn.textContent = isOpen ? "Add-ons ▴" : "Add-ons ▾";
    return;
  }

  // addon quantity buttons
  const addonBtn = e.target.closest(".addon-qty-btn");
  if (addonBtn) {
    const tIndex = parseInt(addonBtn.dataset.ticketIndex, 10);
    const aId = parseInt(addonBtn.dataset.addonId, 10);
    const action = addonBtn.dataset.action; // 'plus' or 'minus'
    if (isNaN(tIndex) || isNaN(aId)) return;
    const addonDef = addOns.find(a => a.id === aId);
    if (!addonDef) return;

    const item = ticket[tIndex];
    if (!item) return;

    const existing = item.addons.find(a => a.id === aId);
    if (action === "plus") {
      if (existing) existing.qty++;
      else item.addons.push({ id: addonDef.id, name: addonDef.name, price: addonDef.price, qty: 1 });
    } else if (action === "minus") {
      if (existing) {
        existing.qty--;
        if (existing.qty <= 0) {
          // remove addon entry
          item.addons = item.addons.filter(a => a.id !== aId);
        }
      }
    }

    // After changing addon quantities, we should re-evaluate uniqueness:
    // If current item now matches another existing item (same id + same addons key), merge them
    const curKey = _addonsKey(item.addons);
    const otherIdx = ticket.findIndex((it, i) => i !== tIndex && it.id === item.id && _addonsKey(it.addons) === curKey);
    if (otherIdx !== -1) {
      // merge quantities and remove duplicate
      ticket[otherIdx].quantity += item.quantity;
      // remove the current item (ensure to remove the item with larger index first)
      if (otherIdx > tIndex) ticket.splice(tIndex, 1);
      else ticket.splice(otherIdx, 1);
    }

    renderTicket();
    return;
  }
});

/* -----------------------
   Inventory + Notifications
------------------------*/
function renderInventory(editMode=false){
  if(!inventoryTableEl) return;
  inventoryTableEl.innerHTML="";
  inventoryData.forEach((item, idx)=>{
    const tr=document.createElement("tr");
    if(!editMode && item.stock<=item.threshold) tr.classList.add("low");
    tr.innerHTML=`
      <td>${editMode?`<input class="edit-input" value="${escapeHtml(item.name)}">`:escapeHtml(item.name)}</td>
      <td>${editMode?`<input class="edit-input" type="number" value="${item.stock}">`:item.stock}</td>
      <td>${editMode?`<input class="edit-input" value="${escapeHtml(item.unit)}">`:escapeHtml(item.unit)}</td>
      <td>${editMode?`<input class="edit-input" type="number" value="${item.threshold}">`:item.threshold}</td>
      ${editMode?`<td><button class="delete-row-btn" data-index="${idx}">✕</button></td>`:""}
    `;
    inventoryTableEl.appendChild(tr);
  });
  if(!editMode) updateNotifications();
}

/* ----- Update Notifications ----- */
function updateNotifications(){
  if(!notifListEl||!notifCountEl) return;
  notifListEl.innerHTML="";
  const lows = inventoryData.map((it,i)=>({...it,index:i})).filter(it=>it.stock<=it.threshold);
  lows.forEach(item=>{
    const li=document.createElement("li");
    li.textContent=`${item.name} is low (${item.stock} ${item.unit})`;
    li.addEventListener("click",()=>highlightInventoryRow(item.index));
    notifListEl.appendChild(li);
  });
  notifCountEl.textContent = lows.length;
}

function highlightInventoryRow(idx){
  const invLink = document.querySelector('.sidenav-menu a[href="#inventory"]');
  if(invLink) invLink.click();
  else switchView("#inventory");
  setTimeout(()=>{
    if(!inventoryTableEl) return;
    const rows = inventoryTableEl.querySelectorAll("tr");
    const row = rows[idx];
    if(!row) return;
    row.classList.add("highlight-row");
    row.scrollIntoView({behavior:"smooth", block:"center"});
    setTimeout(()=>row.classList.remove("highlight-row"),2000);
  },150);
}

/* ----- Inventory Edit / Save / Add / Delete ----- */
if(editBtn) editBtn.addEventListener("click",()=>{
  renderInventory(true);
  editBtn.style.display="none";
  saveBtn.style.display="inline-block";
  addBtn.style.display="inline-block";
});

if(saveBtn) saveBtn.addEventListener("click",()=>{
  const rows=inventoryTableEl.querySelectorAll("tr");
  rows.forEach((tr,i)=>{
    const inputs=tr.querySelectorAll("input.edit-input");
    if(inputs.length===4){
      inventoryData[i].name=inputs[0].value.trim();
      inventoryData[i].stock=Number(inputs[1].value);
      inventoryData[i].unit=inputs[2].value.trim();
      inventoryData[i].threshold=Number(inputs[3].value);
    }
  });
  renderInventory(false);
  editBtn.style.display="inline-block";
  saveBtn.style.display="none";
  addBtn.style.display="none";
});

if(addBtn) addBtn.addEventListener("click",()=>{
  inventoryData.push({name:"New Item", stock:0, unit:"pcs", threshold:1});
  renderInventory(true);
});

inventoryTableEl?.addEventListener("click",(e)=>{
  const delBtn=e.target.closest(".delete-row-btn");
  if(!delBtn) return;
  const idx=parseInt(delBtn.dataset.index,10);
  if(!isNaN(idx)) inventoryData.splice(idx,1);
  renderInventory(true);
});

historyTableEl?.addEventListener("click",(e)=>{
  const viewBtn=e.target.closest(".btn.info");
  if(!viewBtn) return;
  const id=viewBtn.dataset.orderId;
  const order=salesLedger.find(o=>o.id===id);
  if(!order) return;
  const w=window.open("", "_blank", "width=360,height=700");
  if(!w) return;
  w.document.write(buildReceiptHtml(order));
  w.document.close();
  w.focus();
});

function renderHistory(){
  if(!historyTableEl) return;
  const q=(historySearchEl?.value||"").trim().toLowerCase();
  const sVal=historyStartEl?.value||"";
  const eVal=historyEndEl?.value||"";
  const sDate=sVal?new Date(`${sVal}T00:00:00`):null;
  const eDate=eVal?new Date(`${eVal}T23:59:59`):null;
  const filtered = salesLedger.filter(o=>{
    const inStart = !sDate || o.date>=sDate;
    const inEnd = !eDate || o.date<=eDate;
    const qMatch = !q || o.id.toLowerCase().includes(q) || o.items.some(it=> it.name.toLowerCase().includes(q));
    return inStart && inEnd && qMatch;
  });
  historyTableEl.innerHTML = filtered.length ? filtered.map(o=>{
    const itemsTxt = o.items.map(it=>`${escapeHtml(it.name)} x${it.quantity}`).join(", ");
    return `<tr>
      <td>${o.id}</td>
      <td>${formatDateTime(o.date)}</td>
      <td>${escapeHtml(o.method||"-")}</td>
      <td>${itemsTxt}</td>
      <td>₱${o.subtotal.toFixed(2)}</td>
      <td>₱${(o.discount||0).toFixed(2)}</td>
      <td>₱${o.total.toFixed(2)}</td>
      <td><button class="btn info" data-order-id="${o.id}">View</button></td>
    </tr>`;
  }).join("") : `<tr><td colspan="8" style="text-align:center; color:#666;">No transactions found</td></tr>`;
}

function getUser(){ try{ return JSON.parse(localStorage.getItem("brewtrack_user")||"null"); }catch(e){ return null; } }
function setUser(user){ localStorage.setItem("brewtrack_user", JSON.stringify(user)); }
function clearUser(){ localStorage.removeItem("brewtrack_user"); }
function applyRoleUI(){
  const user=getUser();
  const links=Array.from(document.querySelectorAll('.sidenav-menu a'));
  const allowed=allowedViews(user?.role||"admin");
  links.forEach(a=>{ a.style.display = allowed.includes(a.getAttribute('href')) ? 'block':'none'; });
  if(currentUserLabel) currentUserLabel.textContent = user ? `${user.role==='admin'?'Admin':'Staff'} · ${user.username||''}` : '';
  if(currentUserLabelSide) currentUserLabelSide.textContent = user ? `${user.role==='admin'?'Admin':'Staff'} · ${user.username||''}` : '';
  if(signoutBtn) signoutBtn.style.display = user ? 'inline-block':'none';
  if(signoutBtnSide) signoutBtnSide.style.display = user ? 'inline-block':'none';
  if(sidenav) sidenav.style.display = user ? 'block':'none';
  if(leftControls) leftControls.style.display = user ? 'flex':'none';
  if(rightControls) rightControls.style.display = user ? 'flex':'none';
  if(globalSearch) globalSearch.style.display = user ? 'block':'none';
  if(notificationWrapper) notificationWrapper.style.display = user ? 'block':'none';
  if(mainContentEl) mainContentEl.style.marginLeft = user ? '250px':'0';
}

/* -----------------------
   Charts
------------------------*/
function initCharts(){
  if(!salesCanvas || !window.Chart) return;
  const ctx=salesCanvas.getContext("2d");
  window.salesOverviewChart = new Chart(ctx,{ type:"line", data:{labels:[], datasets:[{label:"Sales", data:[], borderWidth:2}]}, options:{responsive:true, maintainAspectRatio:false} });
}

/* -----------------------
   Navigation / Views
------------------------*/
function allowedViews(role){ return role==="staff" ? ["#pos","#history"] : ["#dashboard","#pos","#history","#inventory","#users"]; }
function switchView(hash){
  const user = getUser();
  if(!user){ hash="#signin"; }
  if(!hash) hash="#dashboard";
  if(!hash.startsWith("#")) hash=`#${hash}`;
  const allowed = allowedViews(user?.role||"admin");
  if(hash!=="#signin" && !allowed.includes(hash)) hash = (user?.role==="staff"?"#pos":"#dashboard");
  document.body.classList.toggle("signin-active", hash==="#signin");
  const views=document.querySelectorAll(".view");
  const links=document.querySelectorAll(".sidenav-menu a");
  views.forEach(v=>v.classList.remove("active"));
  links.forEach(l=>l.classList.remove("active"));
  const targetView=document.querySelector(hash);
  const targetLink=document.querySelector(`.sidenav-menu a[href="${hash}"]`);
  if(targetView) {
    targetView.classList.add("active");
    if(hash==="#pos"){
      const activeMain=document.querySelector(".category-btn.active")?.dataset?.category||"all";
      const activeSub=document.querySelector(".subcat-btn.active")?.dataset?.subcat||"all";
      const q=globalSearch?globalSearch.value.trim():"";
      loadMenu({mainCategory:activeMain, subcategory:activeSub, q});
    } else if(hash==="#history") {
      renderHistory();
    }
  }
  if(targetLink) targetLink.classList.add("active");
  try{ if(location.hash!==hash) history.pushState(null,"",hash);}catch(err){}
}

function initNavigation(){
  const links=document.querySelectorAll(".sidenav-menu a");
  if(!links.length) return;
  links.forEach(link=>{
    link.addEventListener("click",(e)=>{
      if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
      e.preventDefault();
      const hash=link.getAttribute("href")||"#dashboard";
      switchView(hash);
    });
  });
  window.addEventListener("popstate",()=>{switchView(location.hash||"#dashboard");});
  if(location.hash) switchView(location.hash);
}

/* ----- Update Totals ----- */
function updateTotals() {
  if(!subtotalEl||!discountEl||!totalEl) return;
  const subtotal = ticket.reduce((s,it) => {
    const addonsTotal = (it.addons?.reduce((sum,a)=> sum + (a.qty * a.price), 0) || 0);
    return s + (it.basePrice + addonsTotal) * it.quantity;
  }, 0);
  const dType = getDiscountType();
  const rate = (dType==="pwd"||dType==="senior"||dType==="student") ? 0.20 : 0;
  const discount = subtotal * rate;
  const total = subtotal - discount;
  subtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
  discountEl.textContent = `₱${discount.toFixed(2)}`;
  totalEl.textContent = `₱${total.toFixed(2)}`;
  const received = Number(cashReceivedEl?.value)||0;
  const change = Math.max(received - total, 0);
  if(changeDueEl) changeDueEl.textContent = `₱${change.toFixed(2)}`;
}

function getDiscountType(){
  const btn = discountTypeGroup?.querySelector('.discount-chip.active');
  return btn ? (btn.dataset.type||'none') : 'none';
}

function generateOrderId(){
  const now=new Date();
  const y=now.getFullYear();
  const m=String(now.getMonth()+1).padStart(2,"0");
  const d=String(now.getDate()).padStart(2,"0");
  const h=String(now.getHours()).padStart(2,"0");
  const min=String(now.getMinutes()).padStart(2,"0");
  const s=String(now.getSeconds()).padStart(2,"0");
  const rand=Math.random().toString(36).slice(2,6).toUpperCase();
  return `BT-${y}${m}${d}-${h}${min}${s}-${rand}`;
}

function formatDateTime(dt){
  const y=dt.getFullYear();
  const m=String(dt.getMonth()+1).padStart(2,"0");
  const d=String(dt.getDate()).padStart(2,"0");
  const h=String(dt.getHours()).padStart(2,"0");
  const min=String(dt.getMinutes()).padStart(2,"0");
  return `${y}-${m}-${d} ${h}:${min}`;
}

function buildReceiptHtml(order){
  const rows = order.items.map(it=>{
    const addonsTotal = (it.addons?.reduce((sum,a)=> sum + (a.qty * a.price), 0) || 0);
    const lineTotal = (it.basePrice + addonsTotal) * it.quantity;
    const addonText = it.addons && it.addons.length ? it.addons.map(a=>`${a.name} x${a.qty}`).join(", ") : "";
    return `<tr><td>${escapeHtml(it.name)}${addonText?'<div class="sub">+'+escapeHtml(addonText)+'</div>':''}</td><td class="qty">${it.quantity}</td><td class="amt">₱${lineTotal.toFixed(2)}</td></tr>`;
  }).join("");
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Receipt ${order.id}</title><style>html,body{background:#f4f4f4} body{font-family:Arial, sans-serif; padding:12px; color:#111; display:flex; justify-content:center} .actions{position:fixed; top:8px; left:8px; right:8px; display:flex; gap:8px; justify-content:flex-end} .actions button{padding:6px 10px; font-size:12px} .receipt{width:280px; background:#fff; padding:12px; box-shadow:0 2px 10px rgba(0,0,0,.08)} h1{font-size:16px; margin:0; text-align:center} .meta{margin-top:6px; font-size:12px; color:#444} table{width:100%; border-collapse:collapse; margin-top:10px} th,td{padding:6px 0; border-bottom:1px dashed #ddd; font-size:12px} th{text-align:left} .qty{width:40px; text-align:center} .amt{width:90px; text-align:right} .sum{margin-top:8px; display:flex; justify-content:space-between; font-size:12px} .sum.total{font-weight:600; border-top:1px solid #ddd; padding-top:8px} .footer{margin-top:12px; font-size:12px; text-align:center; color:#555} .sub{font-size:11px; color:#666; margin-top:2px} @media print{ body{margin:0; background:#fff} .actions{display:none} .receipt{box-shadow:none; width:58mm} } @page{ margin:5mm }</style></head><body><div class="actions"><button onclick="window.print()">Print</button><button onclick="window.close()">Close</button></div><div class="receipt"><h1>Hit Notes Café</h1><div class="meta">Order ID: ${order.id}</div><div class="meta">Date: ${formatDateTime(order.date)}</div><div class="meta">Payment: ${order.method}</div><div class="meta">Served by: ${escapeHtml(order.servedBy||"-")}</div><table><thead><tr><th>Item</th><th class="qty">Qty</th><th class="amt">Amount</th></tr></thead><tbody>${rows}</tbody></table><div class="sum"><div>Subtotal</div><div>₱${order.subtotal.toFixed(2)}</div></div><div class="sum"><div>Discount${order.discount>0?" (20%)":""}</div><div>₱${order.discount.toFixed(2)}</div></div><div class="sum"><div>Received</div><div>₱${order.received.toFixed(2)}</div></div><div class="sum"><div>Change</div><div>₱${order.change.toFixed(2)}</div></div><div class="sum total"><div>Total</div><div>₱${order.total.toFixed(2)}</div></div><div class="footer">Thank you for purchasing!</div></div></body></html>`;
  return html;
}

function handlePay(){
  if(!ticket || ticket.length===0) return;
  const subtotal = ticket.reduce((s,it)=>{
    const addonsTotal = (it.addons?.reduce((sum,a)=> sum + (a.qty * a.price), 0) || 0);
    return s + (it.basePrice + addonsTotal) * it.quantity;
  },0);
  const dType = getDiscountType();
  const rate = (dType==="pwd"||dType==="senior"||dType==="student") ? 0.20 : 0;
  const discount = subtotal * rate;
  const total = subtotal - discount;
  const received = Number(cashReceivedEl?.value)||0;
  const change = Math.max(received - total, 0);
  const user=getUser();
  const servedBy = user ? `${user.role==='admin'?'Admin':'Staff'} · ${user.username||'-'}` : '-';
  const order = { id: generateOrderId(), date: new Date(), method: "Cash", discountType: dType, items: ticket.map(it=>({ ...it })), subtotal, discount, total, received, change, servedBy };
  const w = window.open("", "_blank", "width=360,height=700");
  if(!w) return;
  w.document.write(buildReceiptHtml(order));
  w.document.close();
  w.focus();
  salesLedger.push(order);
  ticket = [];
  renderTicket();
  renderBestsellerStats();
  updateSalesOverviewChart();
  updateCategorySalesChart();
  renderHistory();
}

function sameDay(a,b){ return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }
function between(d,s,e){ return d>=s && d<=e; }
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function startOfWeek(d){ const x=new Date(d); const day=x.getDay(); const diff=day===0?-6:1-day; x.setDate(x.getDate()+diff); x.setHours(0,0,0,0); return x; }
function startForMode(mode){ const now=new Date(); if(mode==="daily") return new Date(now.getFullYear(),now.getMonth(),now.getDate()-6); if(mode==="weekly") return new Date(now.getFullYear(),now.getMonth(),now.getDate()-27); return new Date(now.getFullYear(),now.getMonth()-5,1); }
function aggregateSeries(mode){ const now=new Date(); const labels=[]; const data=[]; if(mode==="daily"){ for(let i=6;i>=0;i--){ const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()-i); labels.push(`${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")}`); const sum=salesLedger.reduce((s,o)=> sameDay(o.date,d)? s+o.total:s,0); data.push(Number(sum.toFixed(2))); } } else if(mode==="weekly"){ for(let i=3;i>=0;i--){ const s=startOfWeek(addDays(now,-7*i)); const e=addDays(s,6); labels.push(`W${4-i}`); const sum=salesLedger.reduce((t,o)=> between(o.date,s,e)? t+o.total:t,0); data.push(Number(sum.toFixed(2))); } } else { for(let i=5;i>=0;i--){ const d=new Date(now.getFullYear(),now.getMonth()-i,1); const s=new Date(d.getFullYear(),d.getMonth(),1); const e=new Date(d.getFullYear(),d.getMonth()+1,0,23,59,59,999); labels.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`); const sum=salesLedger.reduce((t,o)=> between(o.date,s,e)? t+o.total:t,0); data.push(Number(sum.toFixed(2))); } } return {labels,data}; }
function updateSalesOverviewChart(){ if(!window.salesOverviewChart) return; const mode=salesFilter?.value||"weekly"; const s=aggregateSeries(mode); window.salesOverviewChart.data.labels=s.labels; window.salesOverviewChart.data.datasets[0].data=s.data; window.salesOverviewChart.update(); }
function updateCategorySalesChart(){ if(!window.categorySalesChart) return; const mode=salesFilter?.value||"weekly"; const start=startForMode(mode); const totals={coffee:0,noncoffee:0,pastries:0,bestsellers:0}; salesLedger.filter(o=>o.date>=start).forEach(o=>o.items.forEach(it=>{ const p=products.find(pp=>pp.id===it.id); const addonsTotal=(it.addons?.reduce((s,a)=> s + (a.qty*a.price),0)||0); const amt=(it.basePrice+addonsTotal)*it.quantity; if(p && p.mainCategory && totals[p.mainCategory]!==undefined) totals[p.mainCategory]+=amt; })); window.categorySalesChart.data.labels=["Coffee","Non-Coffee","Pastries","Bestsellers"]; window.categorySalesChart.data.datasets[0].data=[totals.coffee, totals.noncoffee, totals.pastries, totals.bestsellers]; window.categorySalesChart.update(); }
function renderBestsellerStats(){ const bestsellerNameEl = safeGet("bestsellerName"); const bestsellerQtyEl = safeGet("bestsellerQty"); const totalSalesEl = safeGet("totalSalesToday"); const totalOrdersEl = safeGet("totalOrdersToday"); const now=new Date(); const s=new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0,0); const e=new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59,999); const orders=salesLedger.filter(o=> between(o.date,s,e)); const total=orders.reduce((t,o)=>t+o.total,0); if(totalSalesEl) totalSalesEl.textContent=`₱${total.toFixed(2)}`; if(totalOrdersEl) totalOrdersEl.textContent=orders.length; if(bestsellerNameEl && bestsellerQtyEl){ const map={}; orders.forEach(o=>o.items.forEach(it=>{ map[it.name]=(map[it.name]||0)+it.quantity; })); const arr=Object.entries(map); if(arr.length){ arr.sort((a,b)=>b[1]-a[1]); bestsellerNameEl.textContent=arr[0][0]; bestsellerQtyEl.textContent=`${arr[0][1]} sold`; } else { bestsellerNameEl.textContent="-"; bestsellerQtyEl.textContent="0 sold"; } } }

/* -----------------------
   Menu Grid Delegation
------------------------*/
function initDelegation() {
  if(!menuGrid) return;
  menuGrid.addEventListener("click",(e)=>{
    const btn=e.target.closest(".menu-add-btn");
    if(!btn) return;
    const id=parseInt(btn.dataset.id,10);
    if(Number.isNaN(id)) return;
    const product = products.find(p=>p.id===id);
    if(!product) return;
    addItemToTicket(product);
  });
}

/* -----------------------
   App Init
------------------------*/
function initApp(){
  try{
    loadMenu();
    initCategoryUI();
    initSearch();
    initDelegation();
    renderInventory(false);
    updateNotifications();
    renderTicket();
    initCharts();
    initNavigation();

    if(payBtn) payBtn.addEventListener("click", handlePay);
    if(salesFilter) salesFilter.addEventListener("change",()=>{ updateSalesOverviewChart(); updateCategorySalesChart(); });
    discountTypeGroup?.addEventListener("click",(e)=>{ const b=e.target.closest('.discount-chip'); if(!b) return; discountTypeGroup.querySelectorAll('.discount-chip').forEach(x=>x.classList.remove('active')); b.classList.add('active'); updateTotals(); });
    cashReceivedEl?.addEventListener("input", updateTotals);
    
    notifBtn?.addEventListener("click",(e)=>{ e.stopPropagation(); const open = notifPanel && notifPanel.style.display!=="block"; if(notifPanel){ notifPanel.style.display = open?"block":"none"; notifBtn.setAttribute("aria-expanded", open?"true":"false"); notifPanel.setAttribute("aria-hidden", open?"false":"true"); } });
    document.addEventListener("click",(e)=>{ if(notificationWrapper && !notificationWrapper.contains(e.target)){ if(notifPanel){ notifPanel.style.display = "none"; notifBtn?.setAttribute("aria-expanded","false"); notifPanel.setAttribute("aria-hidden","true"); } } });
    document.addEventListener("keydown",(e)=>{ if(e.key==="Escape"){ if(notifPanel){ notifPanel.style.display = "none"; notifBtn?.setAttribute("aria-expanded","false"); notifPanel.setAttribute("aria-hidden","true"); } } });
    historySearchEl?.addEventListener("input", renderHistory);
    historyStartEl?.addEventListener("change", renderHistory);
    historyEndEl?.addEventListener("change", renderHistory);
    signinForm?.addEventListener("submit",(e)=>{ e.preventDefault(); const username=(signinUserEl?.value||"").trim(); const role=(signinRoleEl?.value||"staff"); setUser({ username, role }); applyRoleUI(); switchView(role==="staff"?"#pos":"#dashboard"); });
    signoutBtn?.addEventListener("click",()=>{ clearUser(); applyRoleUI(); switchView("#signin"); });
    signoutBtnSide?.addEventListener("click",()=>{ clearUser(); applyRoleUI(); switchView("#signin"); });

    applyRoleUI();
    renderBestsellerStats();
    updateSalesOverviewChart();
    updateCategorySalesChart();
    renderHistory();

    const user=getUser();
    if(!user) switchView("#signin");
    else switchView(location.hash|| (user.role==="staff"?"#pos":"#dashboard"));

    const firstCat=document.querySelector(".category-btn");
    if(firstCat&&!firstCat.classList.contains("active")) firstCat.classList.add("active");

  }catch(err){console.error("Initialization error in app.js:",err);} 
}

if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",initApp);
else initApp();
    const usersTabs=document.querySelector('#users .users-tabs');
    if(usersTabs){
      usersTabs.addEventListener('click',(e)=>{
        const b=e.target.closest('.tab-btn');
        if(!b) return;
        usersTabs.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        const target=b.dataset.tab;
        usersTabs.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
        const panel=document.getElementById(`tab-${target}`);
        if(panel) panel.classList.add('active');
      });
      const dir=document.getElementById('usersDirectoryTable');
      dir?.addEventListener('click',(e)=>{
        const disable=e.target.closest('.user-disable-btn');
        const reset=e.target.closest('.user-reset-btn');
        const del=e.target.closest('.user-delete-btn');
        const row=e.target.closest('tr');
        if(disable){ if(!confirm('Disable this user?')) return; const st=row.querySelector('.status-pill'); if(st){ st.textContent='Disabled'; st.classList.remove('active'); st.classList.add('disabled'); } return; }
        if(reset){ if(!confirm('Reset this user password?')) return; alert('Password reset link prepared.'); return; }
        if(del){ const isAdmin=(row.dataset.role||'')==='admin'; const admins=dir.querySelectorAll('tr[data-role="admin"]').length; if(isAdmin && admins<=1){ alert('Cannot delete the last Admin account.'); return; } if(!confirm('Delete this user?')) return; row.remove(); return; }
      });
    }
