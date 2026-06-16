var DEFAULT_SECTIONS=[{id:"s1",name:"A.  Proteins",color:"#1D6A40",items:[{id:"i1",name:"Chicken breast (boneless)",par:"3 kg",supplier:"Supplier 1"},{id:"i2",name:"Chicken thigh",par:"2 kg",supplier:"Supplier 1"},{id:"i3",name:"Beef (minced / sliced)",par:"2 kg",supplier:"Supplier 2"},{id:"i4",name:"Lamb (Riyadh only)",par:"1 kg",supplier:"Supplier 2"},{id:"i5",name:"Tuna (canned)",par:"6 cans",supplier:"Supplier 12"},{id:"i6",name:"Shrimp / Prawn",par:"1 kg",supplier:"Supplier 12"},{id:"i7",name:"Eggs (whole)",par:"24 pcs",supplier:"Supplier 6"},{id:"i8",name:"Paneer",par:"1 kg",supplier:"Supplier 1"}]},{id:"s2",name:"B.  Fresh produce",color:"#0E6655",items:[{id:"i9",name:"Lettuce / Mixed greens",par:"500g",supplier:"Supplier 3"},{id:"i10",name:"Broccoli",par:"500g",supplier:"Supplier 3"},{id:"i11",name:"Tomatoes",par:"500g",supplier:"Supplier 3"},{id:"i12",name:"Cucumber",par:"500g",supplier:"Supplier 3"},{id:"i13",name:"Avocado",par:"4 pcs",supplier:"Supplier 4"},{id:"i14",name:"Watermelon",par:"2 kg",supplier:"Supplier 4"},{id:"i15",name:"Seasonal fruit mix",par:"1 kg",supplier:"Supplier 4"},{id:"i16",name:"Lemon / Lime",par:"500g",supplier:"Supplier 3"},{id:"i17",name:"Strawberry",par:"250g",supplier:"Supplier 4"},{id:"i18",name:"Mango (fresh)",par:"500g",supplier:"Supplier 4"},{id:"i19",name:"Mushrooms",par:"250g",supplier:"Supplier 3"},{id:"i20",name:"Microgreens",par:"1 pack",supplier:"Supplier 3"},{id:"i21",name:"Dates (Riyadh only)",par:"500g",supplier:"Supplier 4"}]},{id:"s3",name:"C.  Dairy & refrigerated",color:"#154360",items:[{id:"i22",name:"Greek yogurt",par:"1 kg",supplier:"Supplier 5"},{id:"i23",name:"Milk (full fat)",par:"1 L",supplier:"Supplier 5"},{id:"i24",name:"Feta cheese",par:"200g",supplier:"Supplier 5"},{id:"i25",name:"Cheddar / Cheese slices",par:"1 pack",supplier:"Supplier 5"},{id:"i26",name:"Whey protein powder",par:"500g",supplier:"Supplier 9"},{id:"i27",name:"Vegan protein powder",par:"250g",supplier:"Supplier 9"},{id:"i28",name:"Mayonnaise (halal)",par:"250g",supplier:"Supplier 8"},{id:"i29",name:"Laban drink (Riyadh only)",par:"500ml",supplier:"Supplier 5"}]},{id:"s4",name:"D.  Dry goods & staples",color:"#854F0B",items:[{id:"i30",name:"Brown rice",par:"2 kg",supplier:"Supplier 7"},{id:"i31",name:"Whole wheat tortilla wraps",par:"10 pcs",supplier:"Supplier 7"},{id:"i32",name:"Whole wheat bread",par:"1 loaf",supplier:"Supplier 7"},{id:"i33",name:"Muesli",par:"500g",supplier:"Supplier 7"},{id:"i34",name:"Granola",par:"500g",supplier:"Supplier 7"},{id:"i35",name:"Quinoa",par:"250g",supplier:"Supplier 7"},{id:"i36",name:"Oats",par:"250g",supplier:"Supplier 7"},{id:"i37",name:"Almonds",par:"200g",supplier:"Supplier 7"},{id:"i38",name:"Chia seeds",par:"100g",supplier:"Supplier 7"},{id:"i39",name:"Flax seeds",par:"100g",supplier:"Supplier 7"},{id:"i40",name:"Peanut butter",par:"250g",supplier:"Supplier 8"},{id:"i41",name:"Honey",par:"250g",supplier:"Supplier 8"}]},{id:"s5",name:"E.  Sauces & condiments",color:"#4A235A",items:[{id:"i42",name:"Sriracha sauce",par:"1 bottle",supplier:"Supplier 8"},{id:"i43",name:"Thai sweet chilli (halal)",par:"1 bottle",supplier:"Supplier 8"},{id:"i44",name:"BBQ sauce (halal)",par:"1 bottle",supplier:"Supplier 8"},{id:"i45",name:"Caesar dressing (house batch)",par:"1 day supply",supplier:"In-house"},{id:"i46",name:"Tahini",par:"200g",supplier:"Supplier 8"},{id:"i47",name:"Olive oil (extra virgin)",par:"250ml",supplier:"Supplier 8"},{id:"i48",name:"Soy sauce (halal certified)",par:"200ml",supplier:"Supplier 8"}]},{id:"s6",name:"F.  Packaging & consumables",color:"#154360",items:[{id:"i49",name:"Kraft bowls (medium)",par:"50 pcs",supplier:"Supplier 10/11"},{id:"i50",name:"Kraft boxes (wrap/sandwich)",par:"50 pcs",supplier:"Supplier 10/11"},{id:"i51",name:"Sauce cups + lids (30ml)",par:"100 pcs",supplier:"Supplier 11"},{id:"i52",name:"Juice / shake cups (300ml)",par:"50 pcs",supplier:"Supplier 11"},{id:"i53",name:"Healthush branded stickers",par:"100 pcs",supplier:"Supplier 10"},{id:"i54",name:"Carry bags (branded)",par:"50 pcs",supplier:"Supplier 10"},{id:"i55",name:"Cutlery sets",par:"50 sets",supplier:"Supplier 11"},{id:"i56",name:"Gloves (M + L)",par:"1 box each",supplier:"Supplier 11"},{id:"i57",name:"Macro cards (Athlete Series)",par:"20 pcs",supplier:"Supplier 10"},{id:"i58",name:"Tissue / cleaning rolls",par:"2 rolls",supplier:"Supplier 11"}]}];

var sections=loadSections();
var rowState={};
var editTarget=null;
var isMobile=window.innerWidth<=480;

function loadSections(){
  try{var s=localStorage.getItem('hh_sections');return s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULT_SECTIONS));}
  catch(e){return JSON.parse(JSON.stringify(DEFAULT_SECTIONS));}
}
function saveSections(){localStorage.setItem('hh_sections',JSON.stringify(sections));}
function uid(){return 'id'+Date.now()+Math.random().toString(36).substr(2,5);}

function buildChecklist(){
  isMobile=window.innerWidth<=480;
  rowState={};
  var body=document.getElementById('checklist-body');
  body.innerHTML='';
  sections.forEach(function(sec){
    var sh=document.createElement('div');
    sh.className='sec-header';
    sh.style.background=sec.color;
    sh.textContent=sec.name;
    body.appendChild(sh);

    if(!isMobile){
      var ch=document.createElement('div');
      ch.className='col-hdr';
      ch.style.background=sec.color;
      ch.innerHTML='<span>Ingredient</span><span>Par</span><span>Stock</span><span>Y</span><span>N</span><span>Ord qty</span>';
      body.appendChild(ch);
    }

    sec.items.forEach(function(item){
      var rid=item.id;
      rowState[rid]={name:item.name,par:item.par,supplier:item.supplier,stock:'',order:'',qty:''};
      var row=document.createElement('div');
      row.className='ing-row';
      row.id='row-'+rid;

      if(isMobile){
        row.innerHTML=
          '<div class="ing-name">'+escHtml(item.name)+'</div>'+
          '<div class="par-val">'+escHtml(item.par)+'</div>'+
          '<div class="controls-row">'+
            '<input class="stock-in" type="text" inputmode="decimal" placeholder="Stock" oninput="rowState[\''+rid+'\'].stock=this.value">'+
            '<label class="yn-lbl y-lbl"><input type="radio" name="yn_'+rid+'" value="Y" onchange="setOrder(\''+rid+'\',\'Y\')"><span class="yn-box">Y</span></label>'+
            '<label class="yn-lbl n-lbl"><input type="radio" name="yn_'+rid+'" value="N" onchange="setOrder(\''+rid+'\',\'N\')"><span class="yn-box">N</span></label>'+
            '<input class="qty-in" type="text" inputmode="decimal" placeholder="Qty" oninput="rowState[\''+rid+'\'].qty=this.value">'+
          '</div>';
      } else {
        row.innerHTML=
          '<div class="ing-name">'+escHtml(item.name)+'</div>'+
          '<div class="par-val">'+escHtml(item.par)+'</div>'+
          '<input class="stock-in" type="text" inputmode="decimal" placeholder="count" oninput="rowState[\''+rid+'\'].stock=this.value">'+
          '<label class="yn-lbl y-lbl"><input type="radio" name="yn_'+rid+'" value="Y" onchange="setOrder(\''+rid+'\',\'Y\')"><span class="yn-box">Y</span></label>'+
          '<label class="yn-lbl n-lbl"><input type="radio" name="yn_'+rid+'" value="N" onchange="setOrder(\''+rid+'\',\'N\')"><span class="yn-box">N</span></label>'+
          '<input class="qty-in" type="text" inputmode="decimal" placeholder="qty" oninput="rowState[\''+rid+'\'].qty=this.value">';
      }
      body.appendChild(row);
    });
  });
}

function setOrder(rid,val){
  rowState[rid].order=val;
  var row=document.getElementById('row-'+rid);
  if(row) row.classList.toggle('ordered',val==='Y');
  updateSummary();
}

function updateSummary(){
  var tbody=document.getElementById('sum-body');
  var orders=Object.values(rowState).filter(function(r){return r.order==='Y';});
  if(!orders.length){
    tbody.innerHTML='<tr><td colspan="4" class="empty-sum">Tick Y on items above to see them here</td></tr>';
    return;
  }
  tbody.innerHTML=orders.map(function(r,i){
    return '<tr><td>'+(i+1)+'</td><td>'+escHtml(r.name)+'</td>'+
      '<td style="color:#854F0B;font-weight:700">'+escHtml(r.qty||r.par)+'</td>'+
      '<td style="color:#777;font-size:11px">'+escHtml(r.supplier)+'</td></tr>';
  }).join('');
}

function getSO(n){var el=document.querySelector('input[name="so'+n+'"]:checked');return el?el.value:'';}

function submitForm(){
  var date=document.getElementById('f-date').value;
  var outlet=document.getElementById('f-outlet').value;
  var manager=document.getElementById('f-manager').value.trim();
  var time=document.getElementById('f-time').value;
  if(!date||!outlet||!manager||!time){alert('Please fill in Date, Outlet, Manager name and Time.');return;}
  var orders=Object.values(rowState).filter(function(r){return r.order==='Y';});
  var orderLines=orders.length?orders.map(function(r,i){return (i+1)+'. '+r.name+' — '+(r.qty||r.par)+' ('+r.supplier+')';}).join('\n'):'No items need ordering tonight';
  var issues=document.getElementById('f-issues').value.trim()||'None';
  var so1=getSO(1)||'—';var so2=getSO(2)||'—';var so3=getSO(3)||'—';
  var msg='*HEALTHUSH — DAILY ORDERING CHECKLIST*\n'+'━━━━━━━━━━━━━━━━━━\n'+'*Date:* '+date+'\n'+'*Outlet:* '+outlet+'\n'+'*Manager:* '+manager+'\n'+'*Time:* '+time+'\n'+'━━━━━━━━━━━━━━━━━━\n'+'*ORDERS NEEDED ('+orders.length+' items):*\n'+orderLines+'\n'+'━━━━━━━━━━━━━━━━━━\n'+'*SIGN-OFF*\n'+'All items counted: '+so1+'\n'+'Orders sent to suppliers: '+so2+'\n'+'Photo sent to Founder: '+so3+'\n'+'Issues: '+issues;
  var waNum=localStorage.getItem('hh_wa')||'';
  var encoded=encodeURIComponent(msg);
  var waUrl=waNum?'https://wa.me/'+waNum.replace(/\D/g,'')+'?text='+encoded:'https://wa.me/?text='+encoded;
  document.getElementById('success-text').textContent=outlet+' — '+orders.length+' item(s) to order tonight';
  document.getElementById('wa-link').href=waUrl;
  document.getElementById('form-wrap').style.display='none';
  document.getElementById('success-screen').classList.add('show');
}

function resetForm(){
  document.getElementById('form-wrap').style.display='block';
  document.getElementById('success-screen').classList.remove('show');
  buildChecklist();
  updateSummary();
  document.querySelectorAll('input[name^="so"]').forEach(function(el){el.checked=false;});
  document.getElementById('f-issues').value='';
  var d=new Date();
  document.getElementById('f-date').value=d.toISOString().split('T')[0];
  var hh=String(d.getHours()).padStart(2,'0');
  var mm=String(d.getMinutes()).padStart(2,'0');
  document.getElementById('f-time').value=hh+':'+mm;
}

function buildAdmin(){
  var waNum=localStorage.getItem('hh_wa')||'';
  document.getElementById('wa-number').value=waNum;
  if(waNum){document.getElementById('wa-preview').style.display='block';document.getElementById('wa-preview').textContent='Current: +'+waNum;}
  var container=document.getElementById('admin-sections');
  container.innerHTML='';
  sections.forEach(function(sec){
    var box=document.createElement('div');
    box.className='admin-section';
    var hdr=document.createElement('div');
    hdr.className='admin-sec-hdr';
    hdr.style.background=sec.color;
    hdr.innerHTML=escHtml(sec.name)+'<button class="add-ing-btn" onclick="openAddModal(\''+sec.id+'\',\'add\')">+ Add</button>';
    box.appendChild(hdr);
    sec.items.forEach(function(item){
      var row=document.createElement('div');
      row.className='admin-ing-row';
      row.innerHTML='<div class="admin-ing-name">'+escHtml(item.name)+'</div>'+'<div class="admin-ing-par">'+escHtml(item.par)+'</div>'+'<div class="admin-ing-sup">'+escHtml(item.supplier)+'</div>'+'<button class="edit-btn" onclick="openEditModal(\''+sec.id+'\',\''+item.id+'\')">Edit</button>'+'<button class="del-btn" onclick="deleteIngredient(\''+sec.id+'\',\''+item.id+'\')">&#x2715;</button>';
      box.appendChild(row);
    });
    container.appendChild(box);
  });
}

function openAddModal(secId,mode){
  if(mode==='new-section'){document.getElementById('sec-modal-overlay').classList.add('show');return;}
  editTarget={secId:secId,itemId:null};
  document.getElementById('modal-title').textContent='Add Ingredient';
  document.getElementById('m-name').value='';
  document.getElementById('m-par').value='';
  document.getElementById('m-supplier').value='';
  var sel=document.getElementById('m-section');
  sel.innerHTML=sections.map(function(s){return '<option value="'+s.id+'"'+(s.id===secId?' selected':'')+'>'+escHtml(s.name)+'</option>';}).join('');
  document.getElementById('m-section-field').style.display='block';
  document.getElementById('modal-overlay').classList.add('show');
}

function openEditModal(secId,itemId){
  var sec=sections.find(function(s){return s.id===secId;});
  var item=sec&&sec.items.find(function(i){return i.id===itemId;});
  if(!item) return;
  editTarget={secId:secId,itemId:itemId};
  document.getElementById('modal-title').textContent='Edit Ingredient';
  document.getElementById('m-name').value=item.name;
  document.getElementById('m-par').value=item.par;
  document.getElementById('m-supplier').value=item.supplier;
  var sel=document.getElementById('m-section');
  sel.innerHTML=sections.map(function(s){return '<option value="'+s.id+'"'+(s.id===secId?' selected':'')+'>'+escHtml(s.name)+'</option>';}).join('');
  document.getElementById('m-section-field').style.display='block';
  document.getElementById('modal-overlay').classList.add('show');
}

function saveIngredient(){
  var name=document.getElementById('m-name').value.trim();
  var par=document.getElementById('m-par').value.trim();
  var supplier=document.getElementById('m-supplier').value.trim();
  var secId=document.getElementById('m-section').value;
  if(!name||!par){alert('Please enter ingredient name and par level.');return;}
  if(editTarget.itemId){
    var oldSec=sections.find(function(s){return s.id===editTarget.secId;});
    var item=oldSec&&oldSec.items.find(function(i){return i.id===editTarget.itemId;});
    if(item){item.name=name;item.par=par;item.supplier=supplier||'—';
      if(secId!==editTarget.secId){oldSec.items=oldSec.items.filter(function(i){return i.id!==editTarget.itemId;});var newSec=sections.find(function(s){return s.id===secId;});if(newSec) newSec.items.push(item);}
    }
  } else {
    var targetSec=sections.find(function(s){return s.id===secId;});
    if(targetSec) targetSec.items.push({id:uid(),name:name,par:par,supplier:supplier||'—'});
  }
  saveSections();closeModal();buildAdmin();buildChecklist();
}

function deleteIngredient(secId,itemId){
  if(!confirm('Delete this ingredient?')) return;
  var sec=sections.find(function(s){return s.id===secId;});
  if(sec) sec.items=sec.items.filter(function(i){return i.id!==itemId;});
  saveSections();buildAdmin();buildChecklist();
}

function closeModal(event){
  if(event&&event.target!==document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('show');
}

function saveSection(){
  var name=document.getElementById('sm-name').value.trim();
  var color=document.getElementById('sm-color').value;
  if(!name){alert('Please enter a section name.');return;}
  sections.push({id:uid(),name:name,color:color,items:[]});
  saveSections();closeSecModal();buildAdmin();buildChecklist();
}

function closeSecModal(event){
  if(event&&event.target!==document.getElementById('sec-modal-overlay')) return;
  document.getElementById('sec-modal-overlay').classList.remove('show');
}

function saveWaNumber(){
  var num=document.getElementById('wa-number').value.replace(/\D/g,'');
  localStorage.setItem('hh_wa',num);
  var prev=document.getElementById('wa-preview');
  if(num){prev.style.display='block';prev.textContent='Saved: +'+num;}
  else{prev.style.display='none';}
}

function switchTab(tab){
  document.querySelectorAll('.nav-tab').forEach(function(t,i){t.classList.toggle('active',['checklist','admin'][i]===tab);});
  document.querySelectorAll('.page').forEach(function(p,i){p.classList.toggle('active',['page-checklist','page-admin'][i]==='page-'+tab);});
  if(tab==='admin') buildAdmin();
}

function escHtml(str){
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

window.addEventListener('resize',function(){
  var nowMobile=window.innerWidth<=480;
  if(nowMobile!==isMobile){buildChecklist();}
});

(function init(){
  var d=new Date();
  document.getElementById('f-date').value=d.toISOString().split('T')[0];
  var hh=String(d.getHours()).padStart(2,'0');
  var mm=String(d.getMinutes()).padStart(2,'0');
  document.getElementById('f-time').value=hh+':'+mm;
  buildChecklist();
  updateSummary();
})();