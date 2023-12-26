//animation des bars de skills

const webDesign = document.querySelector('.webDesign')
const graphicDesign = document.querySelector('.graohicDesign')
const printDesign = document.querySelector('.printDesign')
const html = document.querySelector('.htmlbar')
const css = document.querySelector('.cssbar')
const jquery = document.querySelector('.jquerybar')
const wordpress = document.querySelector('.wordpressbar')
const php = document.querySelector('.phpbar')
const skillPercentages = {
    webDesign: 185,
    graphicDesign: 175,
    printDesign: 160
};
const codingSkillPercentages = {
    htmlbar: 190,
    cssbar: 180, 
    jquerybar: 170,
    wordpressbar: 160,
    phpbar: 185
};


//design skills
function showSkills() {
    const skillItems = document.querySelectorAll('.designSkill-item');

    skillItems.forEach(skillItem => {
        const skillType = skillItem.querySelector('span').classList[0];
        const bar = skillItem.querySelector('.bar');
        const activeBar = skillItem.querySelector('.activebar');

        const skillPercentage = skillPercentages[skillType];
        const barSkillPercentage = 200;

        setTimeout(() => {
            bar.style.width = barSkillPercentage + 'px';
            activeBar.style.width = skillPercentage + 'px';
            activeBar.style.backgroundColor = "gold"
        }, 300);
    });
}
window.addEventListener('load', showSkills);


//coding skills
function showCodingSkills() {
    const codingSkillItems = document.querySelectorAll('.codingSkill-item');

    codingSkillItems.forEach(skillItem => {
        const skillType = skillItem.querySelector('span').classList[0];
        const bar = skillItem.querySelector('.bar');
        const activeBar = skillItem.querySelector('.activebar');

        const skillPercentage = codingSkillPercentages[skillType];
        const barSkillPercentage = 200;

        setTimeout(() => {
            bar.style.width = barSkillPercentage + 'px';
            activeBar.style.width = skillPercentage + 'px';
            activeBar.style.backgroundColor = "gold"
        }, 300);
    });
}
window.addEventListener('load', showCodingSkills);
