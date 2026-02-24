let interviewList = [];
let rejectionList = [];
let currentStatus = 'all-filter-btn';

let totalJob = document.getElementById('total-job');
let totalInterview = document.getElementById('total-interview');
let totalRejection = document.getElementById('total-rejection');

let totalFilterbtn = document.getElementById('all-filter-btn');
let interviewFilterbtn = document.getElementById('interview-filter-btn');
let rejectionFilterbtn = document.getElementById('rejected-filter-btn');
let mainContainer = document.querySelector('main');
let filterSection = document.getElementById('filtered-section');
let allCards = document.getElementById('allCard');
let jobCount = document.getElementById('job-count');

let noJob = document.getElementById('no-job');



function calculateTotal() {
  totalJob.innerText = allCards.children.length;
  const total = totalJob.innerText;
  totalInterview.innerText = interviewList.length;
  totalRejection.innerText = rejectionList.length;

  if (currentStatus === 'interview-filter-btn') {
    jobCount.innerText = `${interviewList.length} / ${total}`;
    if (interviewList.length < 1) {
      noJob.classList.remove('hidden');
    } else {
      noJob.classList.add('hidden');
    }
  }
  else if (currentStatus === 'rejected-filter-btn') {
    jobCount.innerText = `${rejectionList.length} / ${total}`;
    if (rejectionList.length < 1) {
      noJob.classList.remove('hidden');
    } else {
      noJob.classList.add('hidden');
    }
  }
  else {
    jobCount.innerText = total;
    if (total < 1) {
      noJob.classList.remove('hidden');
    } else {
      noJob.classList.add('hidden');
    }


  }


}

calculateTotal()
function toggleStyle(id) {

  totalFilterbtn.classList.add('bg-white', 'text-black');
  interviewFilterbtn.classList.add('bg-white', 'text-black');
  rejectionFilterbtn.classList.add('bg-white', 'text-black');
  totalFilterbtn.classList.remove('bg-blue-600', 'text-white');
  interviewFilterbtn.classList.remove('bg-blue-600', 'text-white');
  rejectionFilterbtn.classList.remove('bg-blue-600', 'text-white');

  const selected = document.getElementById(id);
  selected.classList.remove('bg-white', 'text-black');
  selected.classList.add('bg-blue-600', 'text-white');

  currentStatus = id;

  if (id === 'interview-filter-btn') {
    allCards.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
    calculateTotal();

  } else if (id === 'all-filter-btn') {
    allCards.classList.remove('hidden');
    filterSection.classList.add('hidden');
    calculateTotal();

  } else if (id === 'rejected-filter-btn') {
    allCards.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejection();
    calculateTotal();

  }
}


mainContainer.addEventListener('click', function (event) {

  const deleteBtn = event.target.closest('.delete-btn');

  if (deleteBtn) {

    const card = deleteBtn.closest('.flex');
    if (!card) return;

    const companyName = card.querySelector('.comapny-name')?.innerText;

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectionList = rejectionList.filter(item => item.companyName !== companyName);

    if (card.parentNode) {
      card.parentNode.removeChild(card);
    }

    calculateTotal();
    return;
  }

  if (event.target.classList.contains('interview')) {
    const targetelement = event.target.parentNode.parentNode;

    const companyName = targetelement.querySelector('.comapny-name').innerText;
    const position = targetelement.querySelector('.position').innerText;
    const salary = targetelement.querySelector('.salary').innerText;
    const description = targetelement.querySelector('.description').innerText;
    const status = targetelement.querySelector('.status').innerText;
    targetelement.querySelector('.status').innerText = 'INTERVIEW'

    const infoCard = {
      companyName,
      position,
      salary,
      description,
      status: 'INTERVIEW'
    };

    const exist = interviewList.find(item => item.companyName == infoCard.companyName)
    if (!exist) {
      interviewList.push(infoCard)
    }

    rejectionList = rejectionList.filter(item => item.companyName != infoCard.companyName)
    if (currentStatus == 'rejected-filter-btn') {
      renderRejection();
    }
    calculateTotal();


  } else if (event.target.classList.contains('rejectect')) {
    const targetelement = event.target.parentNode.parentNode;

    const companyName = targetelement.querySelector('.comapny-name').innerText;
    const position = targetelement.querySelector('.position').innerText;
    const salary = targetelement.querySelector('.salary').innerText;
    const description = targetelement.querySelector('.description').innerText;
    const status = targetelement.querySelector('.status').innerText;
    targetelement.querySelector('.status').innerText = 'REJECT'


    const infoCard = {
      companyName,
      position,
      salary,
      description,
      status: 'REJECT'
    }
    const exist = rejectionList.find(item => item.companyName == infoCard.companyName)
    if (!exist) {
      rejectionList.push(infoCard)
    }
    interviewList = interviewList.filter(item => item.companyName != infoCard.companyName)

    if (currentStatus == 'interview-filter-btn') {
      renderInterview();
    }
    calculateTotal()
  }

});

function renderInterview() {
  filterSection.innerHTML = '';

  for (let interview of interviewList) {

    let div = document.createElement('div');
    div.className = 'flex flex-col sm:flex-row sm:justify-between bg-white shadow mt-4 py-4 px-4 gap-4';

    div.innerHTML = ` <div class="space-y-6">
                    <h1 class="comapny-name">${interview.companyName}</h1>
                    <p class="position">${interview.position}</p>
                    <p class="salary">${interview.salary}</p>
                    <p class="status">${interview.status}</p>
                    <p class="description">${interview.description}</p>
                    <div>
                        <button class="btn btn-outline btn-success interview">INTERVIEW</button>
                        <button class="btn btn-outline btn-error rejectect">REJECTED</button>
                    </div>

                </div>
                <div class="self-end sm:self-start">
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>  `;
    filterSection.appendChild(div);
  }
}

function renderRejection() {

  filterSection.innerHTML = '';
  for (let rejection of rejectionList) {

    let div = document.createElement('div');
    div.className = 'flex flex-col sm:flex-row sm:justify-between bg-white shadow mt-4 py-4 px-4 gap-4';

    div.innerHTML = ` <div class="space-y-6">
                    <h1 class="comapny-name">${rejection.companyName}</h1>
                    <p class="position">${rejection.position}</p>
                    <p class="salary">${rejection.position}</p>
                    <p class="status">${rejection.status}</p>
                    <p class="description">${rejection.description}</p>
                    <div>
                        <button class="btn btn-outline btn-success interview">INTERVIEW</button>
                        <button class="btn btn-outline btn-error rejectect">REJECTED</button>
                    </div>


                </div>
                <div class="self-end sm:self-start">
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>`;
    filterSection.appendChild(div);
  }

}


