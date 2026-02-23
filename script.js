let interviewList =[];
let rejectionList = [];
let currentStatus = 'all-filter-btn';

let totalJob =document.getElementById('total-job');
let  totalInterview = document.getElementById('total-interview');
let totalRejection = document.getElementById('total-rejection');

let totalFilterbtn = document.getElementById('all-filter-btn');
let interviewFilterbtn = document.getElementById('interview-filter-btn');
let rejectionFilterbtn = document.getElementById('rejected-filter-btn');
let mainContainer = document.querySelector('main');
let filterSection = document.getElementById('filtered-section');
let allCards = document.getElementById('allCard');


function calculateTotal(){
    totalJob.innerText = allCards.children.length;
    totalInterview.innerText = interviewList.length
    totalRejection.innerText =rejectionList.length
   
}

calculateTotal()
function toggleStyle(id){

        totalFilterbtn.classList.add('bg-white','text-black');
     interviewFilterbtn.classList.add('bg-white','text-black');
      rejectionFilterbtn.classList.add('bg-white','text-black');
    totalFilterbtn.classList.remove('bg-blue-600','text-white');
     interviewFilterbtn.classList.remove('bg-blue-600','text-white');
      rejectionFilterbtn.classList.remove('bg-blue-600','text-white');

      const selected = document.getElementById(id);
      selected.classList.remove('bg-white','text-black');
      selected.classList.add('bg-blue-600','text-white');
  
      currentStatus=id;

      if(id=='interview-filter-btn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview()
        
      }else if(id=='all-filter-btn'){
         allCards.classList.remove('hidden');
        filterSection.classList.add('hidden')

      }else if(id=='rejected-filter-btn'){
        rejectionFilterbtn.classList.remove('hidden');
        filterSection.classList.add('hidden')
        renderRejection()

      }
}


mainContainer.addEventListener('click',function(event){
  
    if(event.target.classList.contains('interview')){
        const targetelement = event.target.parentNode.parentNode;
    
    const companyName = targetelement.querySelector('.comapny-name').innerText;
    const position = targetelement.querySelector('.position').innerText;
    const salary = targetelement.querySelector('.salary').innerText;
    const description =targetelement.querySelector('.description').innerText;
    const status = targetelement.querySelector('.status').innerText;

   const infoCard = {
    companyName,
    position,
    salary,
    description,
    status
   };

  const exist = interviewList.find(item=> item.companyName == infoCard.companyName)
  if(!exist){
    interviewList.push(infoCard)
  }

    rejectionList = rejectionList.filter(item => item.companyName != infoCard.companyName)
    if(currentStatus=='rejected-filter-btn')
    {
        renderRejection();
    }
    calculateTotal();


    }else if(event.target.classList.contains('rejectect')){
           const targetelement = event.target.parentNode.parentNode;
    
    const companyName = targetelement.querySelector('.comapny-name').innerText;
    const position = targetelement.querySelector('.position').innerText;
    const salary = targetelement.querySelector('.salary').innerText;
    const description =targetelement.querySelector('.description').innerText;
    const status = targetelement.querySelector('.status').innerText;
    

   const infoCard = {
    companyName,
    position,
    salary,
    description,
    status
   }
  const exist = rejectionList.find(item=> item.companyName == infoCard.companyName)
  if(!exist){
    rejectionList.push(infoCard)
  }
  interviewList = interviewList.filter(item => item.companyName != infoCard.companyName)

  if(currentStatus=='interview-filter-btn')
  {
    renderInterview();
  }
  calculateTotal()



    }

    
});

function renderInterview(){
    filterSection.innerHTML='';

    for(let interview of interviewList){

        let div =document.createElement('div');
        div.className='flex justify-between  bg-white shadow mt-4 py-2 px-4';

        div.innerHTML=` <div class="space-y-6">
                    <h1 class="comapny-name">${interview.companyName}</h1>
                    <p class="position">${interview.position}</p>
                    <p class="salary">${interview.salary}</p>
                    <p class="status">${interview.status}</p>
                    <p class="description">${interview.description}</p>
                    <div>
                        <button class="btn btn-outline btn-success interview">INTERVIEW</button>
                        <button class="btn btn-outline btn-error rejectect">REJECTED</button>
                    </div>


                </div>`;
                filterSection.appendChild(div);
    }
}

function renderRejection(){

     filterSection.innerHTML='';
    for(let rejection of rejectionList){

        let div =document.createElement('div');
        div.className='flex justify-between  bg-white shadow mt-4 py-2 px-4';

        div.innerHTML=` <div class="space-y-6">
                    <h1 class="comapny-name">${rejection.companyName}</h1>
                    <p class="position">${rejection.position}</p>
                    <p class="salary">${rejection.position}</p>
                    <p class="status">${rejection.status}</p>
                    <p class="description">${rejection.description}</p>
                    <div>
                        <button class="btn btn-outline btn-success interview">INTERVIEW</button>
                        <button class="btn btn-outline btn-error rejectect">REJECTED</button>
                    </div>


                </div>`;
                filterSection.appendChild(div);
    }

}


