function homePage() {
  return `
      <div class="backgroundWrapper colorOfFindAnswers">
            <div class="contentWrapperWide">
                <section class="sectionFindAnswers">
                    <h2>Find answers</h2>
                    <p>Search above, or browse through the topics below to find answers to your questions</p>
                    <div class="containerForBlocks">
                        <div class="blockOfQuestion" onclick="choosePage('aiInMenagement')">
                            <span>AI in Account Management</span>
                            <img alt="" src="./../assets/icons/blueArrow.png">
                        </div>
                        <div class="blockOfQuestion disabled">
                            <span>AI for Customer Support</span>
                        </div>
                        <div class="blockOfQuestion disabled">
                            <span>AI-driven Marketing</span>
                        </div>
                        <div class="blockOfQuestion disabled">
                            <span>AI in Data Analysis</span>
                        </div>
                        <div class="blockOfQuestion disabled">
                            <span>AI in Operations</span> 
                        </div>
                        <div class="blockOfQuestion disabled">
                            <span>AI for Business Intelligence</span>
                        </div>
                        <div class="blockOfQuestion disabled">
                            <span>AI in programing</span>
                        </div>
                        <div class="blockOfQuestion disabled">
                            <span>AI in shopping</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="backgroundWrapper colorForWhyUsLove">
            <div class="contentWrapperWide">
                <section class="sectionWhyLoveUs">
                    <h2>See why 250,000 companies worldwide love Campaign Monitor.</h2>
                    <p>From Australia to Zimbabwe, and everywhere in between, companies count on Campaign Monitor for
                        email campaigns that boost the bottom line.
                    </p>
                    <button  class="disabled">Get started for free</button>
                </section>
            </div>
        </div>
   
    `;
}
