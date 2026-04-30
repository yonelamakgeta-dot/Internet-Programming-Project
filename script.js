const modal = document.getElementById('actionModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalEmail = document.getElementById('modalEmail');
const modalPassword = document.getElementById('modalPassword');
const confirmBtn = document.getElementById('modalConfirmBtn');
const closeModalBtn = document.getElementById('modalCloseBtn');
let currentAction = 'login';

function showToast(message, isError = false) {
    const toast = document.getElementById('toastMsg');
    toast.style.backgroundColor = isError ? '#c0392b' : '#2c6e2f';
    toast.innerText = message;
    toast.style.opacity = '1';
    setTimeout(() => {
        toast.style.opacity = '0';
    }, 2800);
}

function openModal(actionType) {
    currentAction = actionType;
    modalEmail.value = '';
    modalPassword.value = '';
    
    if (actionType === 'login') {
        modalTitle.innerText = 'Log in to OwlNest';
        modalDesc.innerText = 'Access funding opportunities, mentors & community.';
        confirmBtn.innerText = 'Log In';
    } else if (actionType === 'signup') {
        modalTitle.innerText = 'Join the Nest 🪹';
        modalDesc.innerText = 'Create your account — it takes 30 seconds.';
        confirmBtn.innerText = 'Sign Up';
    } else if (actionType === 'join') {
        modalTitle.innerText = 'Join Now 🚀';
        modalDesc.innerText = 'Become part of Africa\'s innovation hub.';
        confirmBtn.innerText = 'Start Journey';
    } else if (actionType === 'viewMoreStories') {
        modalTitle.innerText = '📰 Latest Stories';
        modalDesc.innerText = 'More inspiring updates from community: "AI for health in Kigali", "Green energy incubator launched".';
        confirmBtn.innerText = 'Explore Feed';
        currentAction = 'exploreStories';
    } else if (actionType === 'learnMore') {
        modalTitle.innerText = '✨ About OwlNest';
        modalDesc.innerText = 'We connect African innovators to capital, knowledge, and teammates. Join 12k+ entrepreneurs building the future!';
        confirmBtn.innerText = 'Get Started';
        currentAction = 'learnMoreAction';
    }
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function handleModalConfirm() {
    const email = modalEmail.value.trim();
    const password = modalPassword.value.trim();

    if (currentAction === 'login') {
        if (!email || !password) {
            showToast('Please enter email and password', true);
            return;
        }
        showToast(`Welcome back! Logging in as ${email}`);
        closeModal();
    } 
    else if (currentAction === 'signup') {
        if (!email || !password) {
            showToast('Please fill all fields to sign up', true);
            return;
        }
        showToast(`🎉 Account created! Welcome to OwlNest, ${email.split('@')[0]}`);
        closeModal();
    }
    else if (currentAction === 'join') {
        if (!email) {
            showToast('Enter your email to join the community', true);
            return;
        }
        showToast(`✅ Thanks for joining! We'll send updates to ${email}`);
        closeModal();
    }
    else if (currentAction === 'exploreStories') {
        showToast('🌟 You discovered new trending stories! Check back daily.');
        closeModal();
    }
    else if (currentAction === 'learnMoreAction') {
        showToast('📖 Explore our resources — mentors, webinars, funding guides available soon.');
        closeModal();
    }
}

document.getElementById('loginBtnNav')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('login');
});

document.getElementById('signupBtnNav')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('signup');
});

document.getElementById('heroJoinBtn')?.addEventListener('click', () => {
    openModal('join');
});

document.getElementById('heroLearnBtn')?.addEventListener('click', () => {
    openModal('learnMore');
});

const viewMoreLink = document.getElementById('viewMoreStories');
if (viewMoreLink) {
    viewMoreLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('viewMoreStories');
    });
}

confirmBtn.addEventListener('click', handleModalConfirm);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
        const titles = ['Find Investors', 'Meet Mentors', 'Build Your Team', 'Grow Your Network'];
        const actions = ['Investor matching ready!', 'Top mentors available now', 'Find co-founders easily', 'Expand your network today'];
        showToast(`${titles[idx]} → ${actions[idx]}`, false);
    });
});

const statsItems = document.querySelectorAll('.impact-card, .stat-item');
statsItems.forEach(stat => {
    stat.addEventListener('click', () => {
        showToast('✨ Explore our community impact dashboard', false);
    });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const text = link.innerText;
        showToast(`🔍 ${text} section — launching full experience soon. Stay tuned!`, false);
    });
});

const storyItems = document.querySelectorAll('.story-item');
storyItems.forEach(item => {
    item.addEventListener('click', () => {
        showToast('❤️ Like this story? Join the conversation! (Sign up to comment)', false);
    });
});

const footerLinks = document.querySelectorAll('.footer-links a');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showToast(`📄 ${link.innerText} page — more info coming soon`, false);
    });
});