
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: `The hands on coding bootcamp
        that will transform your career
        Our intensive program helps you master the in-demand skills you need to accelerate your career and change your life. Our graduates work at all types of companies, from small startups to some of NZ's technology giants and our alumni network is robust, active and welcoming.
        WHY BE A WEB DEVELOPER
        WHAT IS A WEB DEVELOPER
        Web development is an amazingly satisfying profession – it’s highly dynamic, beautifully creative and ridiculously rewarding. Web development professionals say that even the master is always the learner – it is a lifelong engagement in which you will always be unravelling new things. Web development is also an enabler – you get to build things from conception to implementation, from idea to reality and its possibilities are endless. Read more here.
        “Everyone consumes the internet, but it’s a small group of people who ultimately determine what it looks like and decide how people are going to engage with it. Being a web developer means you can cross that divide and therefore engage in new and meaningful ways”
        – Hannah Salmon, Loomio Web Developer and Graduate of Dev Academy`},
        {id: 2, colName: `We focus on creating a holistic education experience
        Our mission to design a rigorous yet accessible programme, driven by our unique culture, has produced a set of values that guides everything we do:
        Empathy – we care about people more than machines
        Learning – we empower students to learn more than they thought possible
        Building – we build beautiful and meaningful things
        Feedback – we listen, iterate and improve
        Impact – we celebrate technology that improves our communities
        Our curriculum has been carefully crafted in collaboration with employers and the latest research on immersive learning. We use student feedback to improve our curriculum every three weeks – a rate of change that very few educational institutions can match.
        Our course is not for the faint hearted. Be prepared to work harder than you have ever worked before. We look for individuals who have tenacity, commitment and a passion for problem solving. We do not base our admissions on prior programming experience, and you do not need to be good at maths or science to excel in the field of web development.
        Because culture is at the heart of everything we do, we look for students who will work well in a team and who fit our 3 core values: Integrity, Kindness and Effort.`},
        {id: 3, colName: `Te Uru Rangi
        Engaging Māori in the Digital Economy as technologists, entrepreneurs, innovators, owners and investors.
        The digital economy represents jobs and industries of the future, but Māori have very low participation in the digital economy.
        In conjunction with Te Puni Kōkiri and MBIE, Dev Academy is proud to announce 42 scholarships for Māori students. We welcome you to apply and take your first steps towards your future career.
        “We want to help train and support upcoming Māori tech and business leaders. Te Uru Rangi scholarships create a huge opportunity for more Māori to step into a thriving tech industry, and enter jobs that have high earning potential and value creativity, diversity and collaborative problem solving.”
        Te Uru Rangi is a scholarship programme designed to help Māori into high-value jobs and to support the development of Māori language and culture within technology. Recipients of the scholarship complete an online preparation course (from anywhere in the country) at their own pace before participating in the full immersion web development bootcamp for 9 weeks in either Auckland or Wellington.
        Recipients of Te Uru Rangi scholarships also receive tailored support from our Kaiāwhina Māori to navigate the programme.
        The fund is part of the Ka Hao Māori Digital Technology Fund, managed by Te Puni Kōkiri and MBIE. There are 42 scholarships in total, each worth $7,000.`},
        {id: 4, colName: `"Jabberwocky"
        ’Twas brillig, and the slithy toves
        Did gyre and gimble in the wabe;
        All mimsy were the borogoves,
        And the mome raths outgrabe.
        “Beware the Jabberwock, my son!
        The jaws that bite, the claws that catch!
        Beware the Jubjub bird, and shun
        The frumious Bandersnatch!”
        He took his vorpal sword in hand:
        Long time the manxome foe he sought—
        So rested he by the Tumtum tree,
        And stood awhile in thought.
        And as in uffish thought he stood,
        The Jabberwock, with eyes of flame,
        Came whiffling through the tulgey wood,
        And burbled as it came!
        One, two! One, two! And through and through
        The vorpal blade went snicker-snack!
        He left it dead, and with its head
        He went galumphing back.
        “And hast thou slain the Jabberwock?
        Come to my arms, my beamish boy!
        O frabjous day! Callooh! Callay!”
        He chortled in his joy.
        ’Twas brillig, and the slithy toves
        Did gyre and gimble in the wabe;
        All mimsy were the borogoves,
        And the mome raths outgrabe.
        from Through the Looking-Glass, and
        What Alice Found There (1871)`},
        {id: 5, colName: `An emotionally fragile woman recently released from a mental hospital for self mutilation goes to school to gain secretarial skills to gain employment. She has an alcoholic father and a co-dependent mother who are clueless as to who she really is which a tormented soul who really wants to find something with which she can find success. She is a great secretary and finds a job with a unique, old fashioned, but off center in charge boss with a somewhat sadistic sexual proclivity. She grows and evolves and so does he.`},
        {id: 6, colName: `Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there
        I'll tell you how I became the prince of a town called Bel Air
        In west Philadelphia born and raised
        On the playground was where I spent most of my days
        Chillin' out maxin' relaxin' all cool
        And all shootin some b-ball outside of the school
        When a couple of guys who were up to no good
        Started making trouble in my neighborhood
        I got in one little fight and my mom got scared
        She said 'You're movin' with your auntie and uncle in Bel Air'
        I whistled for a cab and when it came near
        The license plate said fresh and it had dice in the mirror
        If anything I could say that this cab was rare
        But I thought 'Nah, forget it' - 'Yo, homes to Bel Air'
        I pulled up to the house about 7 or 8
        And I yelled to the cabbie 'Yo homes smell ya later'
        I looked at my kingdom
        I was finally there
        To sit on my throne as the Prince of Bel Air`},
        {id: 7, colName: `Our Father who art in heaven,
        Hallowed be thy name.
        Thy kingdom come.
        Thy will be done
        on earth as it is in heaven.
        Give us this day our daily bread,
        and forgive us our trespasses,
        as we forgive those who trespass against us,
        and lead us not into temptation,
        but deliver us from evil.
        For thine is the kingdom,
        and the power, and the glory,
        for ever and ever
        Amen.`},
        {id: 8, colName: `Ranginui and Papatūānuku are the primordial parents, the sky father and the earth mother who lie locked together in a tight embrace. They have many children all of whom are male, who are forced to live in the cramped darkness between them. These children grow and discuss among themselves what it would be like to live in the light. Tūmatauenga, the fiercest of the children, proposes that the best solution to their predicament is to kill their parents.
        But his brother Tāne disagrees, suggesting that it is better to push them apart, to let Ranginui be as a stranger to them in the sky above while Papatūānuku will remain below to nurture them. The others put their plans into action—Rongo, the god of cultivated food, tries to push his parents apart, then Tangaroa, the god of the sea, and his sibling Haumia-tiketike, the god of wild food, join him. In spite of their joint efforts Rangi and Papa remain close together in their loving embrace. After many attempts Tāne, god of forests and birds, forces his parents apart. Instead of standing upright and pushing with his hands as his brothers have done, he lies on his back and pushes with his strong legs. Stretching every sinew Tāne pushes and pushes until, with cries of grief and surprise, Ranginui and Papatūānuku were pried apart...`},
        {id: 9, colName: `Plush dark fruits are paired with delightful aromas of dried violets and white pepper imparted from the Viognier. On the palate, a lovely fruity core is supported by a fine-grained tannin structure that combines with a freshness and balance that carries through to the back of the palate.`},
        {id: 10, colName: `Aping the high-gloss androgyny of the New York Dolls, David Bowie, and the half-forgotten and openly gay glam rock pioneer Jobraith, John Cameron Mitchell’s Hedwig and the Angry Inch is a band (and a film) lousy with camp ethos and ultra-literate pop culture references. The music of “The Angry Inch” mixes Lou Reed with Iggy Pop, but the aesthetic is pure Diamond Dog — well, Diamond Dog if you replace Bowie with a Streisand impersonator, which, funny enough, this film includes (she goes by the stage name “Krystal Nacht” and her extended medley is mind-blowing!). What began as an off-Broadway, monologue-motivated production, Hedwig and the Angry Inch had big success in ancillaries (like the soundtrack) and now rotates like an anatomically graphic Rocky Horror Picture Show, with costume attendees in tow.`},
        {id: 11, colName: `All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. 
        All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.
        All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.`},
        {id: 12, colName: `When I was a young man I carried my pack
        And I lived the free life of a rover
        From the murrays green basin to the dusty outback
        I waltzed my matilda all over
        Then in nineteen fifteen my country said son
        It's time to stop rambling 'cause there's work to be
        Done
        So they gave me a tin hat and they gave me a gun
        And they sent me away to the war
        And the band played Waltzing Matilda
        As we sailed away from the quay
        And amidst all the tears and the shouts and the
        Cheers
        We sailed off to Gallipoli
        How well I remember that terrible day
        When the blood stained the sand and the water
        And how in that hell that they called suvla bay
        We were butchered like lambs at the slaughter
        Johnny Turk he was ready, he primed himself well
        He showered us with bullets, he rained us with
        Shells
        And in five minutes flat he'd blown us all to hell
        Nearly blew us right back to Australia
        But the band played waltzing Matilda
        As we stopped to bury our slain
        And we buried ours and the Turks buried theirs
        Then it started all over again
        Now those who were living did their best to survive
        In that mad world of blood, death and fire
        And for seven long weeks I kept myself alive
        While the corpses around me piled higher
        Then a big Turkish shell knocked me arse over tit
        And when I woke up in my hospital bed
        And saw what it had done, Christ I wished I was
        Dead
        Never knew there were worse things than dying
        And no more I'll go waltzing Matilda
        To the green bushes so far and near
        For to hump tent and pegs, a man needs two legs
        No more waltzing Matilda for me
        So they collected the cripples, the wounded and
        Maimed
        And they shipped us back home to Australia
        The legless, the armless, the blind and insane
        Those proud wounded heroes of suvla
        And as our ship pulled into circular quay
        I looked at the place where me legs used to be
        And thank Christ there was nobody waiting for me
        To grieve and to mourn and to pity
        And the band played Waltzing Matilda
        As they carried us down the gangway
        But nobody cheered, they just stood and stared
        And they turned all their faces away
        And now every April I sit on my porch
        And I watch the parade pass before me
        I see my old comrades, how proudly they march
        Reliving the or their dreams of past glory
        i see the old men, all twisted and torn
        The forgotten heroes of a forgotten war
        And the young people ask me, "what are they
        Marching for?"
        And I ask myself the same question
        And the band plays Waltzing Matilda
        And the old men still answer to the call
        But year after year their numbers get fewer
        Some day no one will march there at all
        Waltzing Matilda, Waltzing Matilda
        Who'll go a-Waltzing Matilda with me?`},
        {id: 13, colName: `The Maori Jesus - James K. Baxter
        I saw the Maori Jesus
        Walking on Wellington Harbour.
        He wore blue dungarees,
        His beard and hair were long.
        His breath smelled of mussels and paraoa.
        When he smiled it looked like the dawn.
        When he broke wind the little fishes trembled.
        When he frowned the ground shook.
        When he laughed everybody got drunk.
        The Maori Jesus came on shore
        And picked out his twelve disciples.
        One cleaned toilets in the railway station;
        His hands were scrubbed red to get the shit out of the pores.
        One was a call-girl who turned it up for nothing.
        One was a housewife who had forgotten the Pill
        And stuck her TV set in the rubbish can.
        One was a little office clerk
        Who'd tried to set fire to the Government Buldings.
        Yes, and there were several others;
        One was a sad old quean;
        One was an alcoholic priest
        Going slowly mad in a respectable parish.
        The Maori Jesus said, 'Man,
        From now on the sun will shine.'
        He did no miracles;
        He played the guitar sitting on the ground.
        The first day he was arrested
        For having no lawful means of support.
        The second day he was beaten up by the cops
        For telling a dee his house was not in order.
        The third day he was charged with being a Maori
        And given a month in Mt Crawford.
        The fourth day he was sent to Porirua
        For telling a screw the sun would stop rising.
        The fifth day lasted seven years
        While he worked in the Asylum laundry
        Never out of the steam.
        The sixth day he told the head doctor,
        'I am the Light in the Void;
        I am who I am.'
        The seventh day he was lobotomised;
        The brain of God was cut in half.
        On the eighth day the sun did not rise.
        It did not rise the day after.
        God was neither alive nor dead.
        The darkness of the Void,
        Mountainous, mile-deep, civilised darkness
        Sat on the earth from then till now.`},
        {id: 14, colName: `01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001 01001000 01100101 01101100 01101100 01101111 00100001`},
        {id: 15, colName: `It's time to play the music
        It's time to light the lights
        It's time to meet the Muppets on the Muppet Show tonight
        It's time to put on makeup
        It's time to dress up right
        It's time to raise the curtain on the Muppet Show tonight
        Why do we always come here
        I guess we'll never know
        It's like a kind of torture
        To have to watch the show
        To introduce out guest star
        That's what I'm here to do
        So it really makes me happy
        To introduce to you...
        GUEST STAR!
        So now let's get things started
        Why don't you get things started?
        It's time to get things started
        On the most sensational inspirational, celebrational, Muppetational
        This is what we call the Muppet Show!`},
        {id: 16, colName: `As I walk through the valley of the shadow of death
        I take a look at my life and realize there's nothin' left
        ‘Cause I've been blastin' and laughin' so long
        That even my momma thinks that my mind is gone
        But I ain't never crossed a man that didn't deserve it
        Me be treated like a punk, you know that's unheard of
        You better watch how you talkin' and where you walkin'
        Or you and your homies might be lined in chalk
        I really hate to trip, but I gotta loc
        As they croak, I see myself in the pistol smoke
        Fool, I'm the kinda G the little homies wanna be like
        On my knees in the night, sayin' prayers in the streetlight
        Been spendin' most their lives
        Livin' in a gangsta's paradise
        Been spendin' most their lives
        Livin' in a gangsta's paradise
        Keep spendin' most our lives
        Livin' in a gangsta's paradise
        Keep spendin' most our lives
        Livin' in a gangsta's paradise
        Look at the situation they got me facin'
        I can't live a normal life, I was raised by the street
        So I gotta be down with the hood team
        Too much television watchin' got me chasin' dreams
        I'm a educated fool with money on my mind
        Got my ten in my hand and a gleam in my eye
        I'm a loc'd out gangsta, set trippin' banger
        And my homies is down so don't arouse my anger
        Fool, death ain't nothin' but a heart beat away
        I'm livin' life do or die, what can I say?
        I'm 23 now, but will I live to see 24?
        The way things is goin' I don't know
        Tell me why are we so blind to see
        That the ones we hurt are you and me?
        Been spendin' most their lives
        Livin' in a gangsta's paradise
        Been spendin' most their lives
        Livin' in a gangsta's paradise
        Keep spendin' most our lives
        Livin' in a gangsta's paradise
        Keep spendin' most our lives
        Livin' in a gangsta's paradise`},
        {id: 17, colName: `The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness. For he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you.`},
        {id: 18, colName: `Say your prayers little one
        Don't forget, my son
        To include everyone
        Tuck you in, warm within
        Keep you free from sin
        'Till the sandman he comes
        Sleep with one eye open
        Gripping your pillow tight
        Exit, light
        Enter, night
        Take my hand
        We're off to never-never land
        Somethings wrong, shut the light
        Heavy thoughts tonight
        And they aren't of Snow White
        Dreams of war, dreams of liars
        Dreams of dragon's fire
        And of things that will bite
        Sleep with one eye open
        Gripping your pillow tight
        Exit, light
        Enter, night
        Take my hand
        We're off to never-never land
        Now I lay me down to sleep
        Now I lay me down to sleep
        I pray the Lord my soul to keep
        I pray the Lord my soul to keep
        If I die before I wake
        If I die before I wake
        I pray the lord my soul to take
        I pray…`},
        {id: 19, colName: `i like my body when it is with your 
        body.    It is so quite new a thing. 
        Muscles better and nerves more. 
        i like your body.   i like what it does, 
        i like its hows. i like to feel the spine 
        of your body and its bones,and the trembling 
        -firm-smooth ness and which i will 
        again and again and again 
        kiss, i like kissing this and that of you, 
        i like,slowly stroking the,shocking fuzz 
        of your electric fur,and what-is-it comes 
        over parting flesh....And eyes big love-crumbs, 
        and possibly i like the thrill 
        of under me you so quite new`},
        {id: 20, colName: `Once upon a midnight dreary, while I pondered, weak and weary,
        Over many a quaint and curious volume of forgotten lore—
        While I nodded, nearly napping, suddenly there came a tapping,
        As of some one gently rapping, rapping at my chamber door.
        "'Tis some visiter," I muttered, "tapping at my chamber door—
        Only this and nothing more."
        “Prophet!” said I, “thing of evil!—prophet still, if bird or devil!
        By that Heaven that bends above us—by that God we both adore—
        Tell this soul with sorrow laden if, within the distant Aidenn,
        It shall clasp a sainted maiden whom the angels name Lenore—
        Clasp a rare and radiant maiden whom the angels name Lenore.”
        Quoth the Raven “Nevermore.”`},
        {id: 21, colName: `Odysseus and his men then sail through the murky night to the land of the Cyclopes, a rough and uncivilized race of one-eyed giants. After making a meal of wild goats captured on an island offshore, they cross to the mainland. There they immediately come upon a cave full of sheep and crates of milk and cheese. The men advise Odysseus to snatch some of the food and hurry off, but, to his and his crew’s detriment, he decides to linger. The cave’s inhabitant soon returns—it is the Cyclops Polyphemus, the son of Poseidon. Polyphemus makes a show of hospitality at first, but he soon turns hostile. He devours two of Odysseus’s men on the spot and imprisons Odysseus and the rest in his cave for future meals.
        Odysseus wants to take his sword to Polyphemus right then, but he knows that only Polyphemus is strong enough to move the rock that he has placed across the door of his cave. Odysseus thus devises and executes a plan. The next day, while Polyphemus is outside pasturing his sheep, Odysseus finds a wooden staff in the cave and hardens it in the fire. When Polyphemus returns, Odysseus gets him drunk on wine that he brought along from the ship. Feeling jovial, Polyphemus asks Odysseus his name. Odysseus replies that his name is “Nobody”. As soon as Polyphemus collapses with intoxication, Odysseus and a select group of his men drive the red-hot staff into his eye. Polyphemus wakes with a shriek, and his neighbors come to see what is wrong, but they leave as soon as he calls out, “Nobody’s killing me”. When morning comes, Odysseus and his men escape from the cave, unseen by the blind Polyphemus, by clinging to the bellies of the monster’s sheep as they go out to graze. Safe on board their ships and with Polyphemus’s flock on board as well, Odysseus calls to land and reveals his true identity. With his former prisoners now out of reach, the blind giant lifts up a prayer to his father, Poseidon, calling for vengeance on Odysseus.`},
        {id: 22, colName: `The details of my life are quite inconsequential... very well, where do I begin? My father was a relentlessly self-improving boulangerie owner from Belgium with low grade narcolepsy and a penchant for buggery. My mother was a fifteen year old French prostitute named Chloe with webbed feet. My father would womanize, he would drink. He would make outrageous claims like he invented the question mark. Sometimes he would accuse chestnuts of being lazy. The sort of general malaise that only the genius possess and the insane lament. My childhood was typical. Summers in Rangoon, luge lessons. In the spring we'd make meat helmets. When I was insolent I was placed in a burlap bag and beaten with reeds- pretty standard really. At the age of twelve I received my first scribe. At the age of fourteen a Zoroastrian named Vilma ritualistically shaved my testicles. There really is nothing like a shorn scrotum... it's breathtaking- I highly suggest you try it.`}
      ]);
    });
};
