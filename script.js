// jshint esversion:6
"Use strict";
const data =  [
    {"activity":"Learn Express.js","availability":0.25,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://expressjs.com/","key":"3943506"}
    ,{"activity":"Learn to greet someone in a new language","availability":0.2,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link": "","key":"4704256"}
    ,{"activity":"Learn how to play a new sport","availability":0.2,"type":"recreational","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5808228"}
    ,{"activity":"Text a friend you haven't talked to in a long time","availability":0.2,"type":"social","participants":2,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6081071"}
    ,{"activity":"Learn a new programming language","availability":0.25,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5881028"}
    ,{"activity":"Learn how to fold a paper crane","availability":0.05,"type":"education","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link": "","key":"3136036"}
    ,{"activity":"Find a DIY to do","availability":0.3,"type":"diy","participants":1,"price":0.4,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4981819"}
    ,{"activity":"Learn about the Golden Ratio","availability":0.2,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Golden_ratio","key":"2095681"}
    ,{"activity":"Volunteer at a local animal shelter","availability":0.5,"type":"charity","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"1382389"}
    ,{"activity":"Play a game of Monopoly","availability":0.3,"type":"social","participants":4,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"1408058"}
    ,{"activity":"Bake pastries for you and your neighbor","availability":0.3,"type":"cooking","participants":1,"price":0.4,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"8125168"}
    ,{"activity":"Bake something you've never tried before","availability":0.3,"type":"cooking","participants":1,"price":0.4,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"5665663"}
    ,{"activity":"Take your dog on a walk","availability":0.2,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9318514"}
    ,{"activity":"Meditate for five minutes","availability":0.05,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3699502"}
    ,{"activity":"Start a book you've never gotten around to reading","availability":0.1,"type":"relaxation","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7114122"}
    ,{"activity":"Take a caffeine nap","availability":0.08,"type":"relaxation","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":false,"link":"","key":"5092652"}
    ,{"activity":"Take a bubble bath","availability":0.1,"type":"relaxation","participants":1,"price":0.15,"accessibility":"'Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2581372"}
    ,{"activity":"Go to a nail salon","availability":0.5,"type":"relaxation","participants":1,"price":0.4,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7526324"}
    ,{"activity":"Listen to your favorite album","availability":0.2,"type":"music","participants":1,"price":0.08,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3136729"}
    ,{"activity":"Learn to play a new instrument","availability":0.6,"type":"music","participants":1,"price":0.55,"accessibility":"Major challenges","duration":"hours","kidFriendly":true,"link":"","key":"3192099"}
    ,{"activity":"Teach your dog a new trick","availability":0.15,"type":"relaxation","participants":1,"price":0.05,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1668223"}
    ,{"activity":"Make a to-do list for your week","availability":0.05,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5920481"}
    ,{"activity":"Go swimming with a friend","availability":0.1,"type":"social","participants":2,"price":0.1,"accessibility":"Major challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1505028"}
    ,{"activity":"Go on a long drive with no music","availability":0.2,"type":"relaxation","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"4290333"}
    ,{"activity":"Watch a movie you'd never usually watch","availability":0.15,"type":"relaxation","participants":1,"price":0.15,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"9212950"}
    ,{"activity":"Go see a movie in theaters with a few friends","availability":0.3,"type":"social","participants":4,"price":0.2,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"5262759"}
    ,{"activity":"Draw and color a Mandala","availability":0.1,"type":"relaxation","participants":1,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Mandala","key":"4614092"}
    ,{"activity":"Rearrange and organize your room","availability":0.15,"type":"busywork","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6197243"}
    ,{"activity":"Pot some plants and put them around your house","availability":0.3,"type":"relaxation","participants":1,"price":0.4,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6613330"},
    ,{"activity":"Plan a vacation you've always wanted to take","availability":0.05,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7265395"},
    ,{"activity":"Take your cat on a walk","availability":0.1,"type":"relaxation","participants":1,"price":0.02,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5940465"}
    ,{"activity":"Have a football scrimmage with some friends","availability":0.2,"type":"social","participants":8,"price":0,"accessibility":"Major challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1638604"},
    ,{"activity":"Fill out a basketball bracket","availability":0.1,"type":"recreational","participants":1,"price":0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7806284"}
    ,{"activity":"Play a game of tennis with a friend","availability":0.4,"type":"social","participants":2,"price":0.1,"accessibility":"Major challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1093640"}
    ,{"activity":"Catch up with a friend over a lunch date","availability":0.15,"type":"social","participants":2,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5590133"}
    ,{"activity":"Learn how to iceskate or rollerskate","availability":0.25,"type":"recreational","participants":1,"price":0.1,"accessibility":"Major challenges","duration":"days","kidFriendly":true,"link":"","key":"5947957"}
    ,{"activity":"Go to a concert with local artists with some friends","availability":0.3,"type":"social","participants":3,"price":0.4,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"2211716"}
    ,{"activity":"Explore the nightlife of your city","availability":0.32,"type":"social","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":false,"link":"","key":"2237769"}
    ,{"activity":"Fix something that's broken in your house","availability":0.3,"type":"diy","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6925988"}
    ,{"activity":"Wash your car","availability":0.15,"type":"busywork","participants":1,"price":0.05,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1017771"}
    ,{"activity":"Find a charity and donate to it","availability":0.1,"type":"charity","participants":1,"price":0.4,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1488053"}
    ,{"activity":"Hold a yard sale","availability":0.1,"type":"social","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"days","kidFriendly":true,"link":"","key":"1432113"}
    ,{"activity":"Donate blood at a local blood center","availability":0.35,"type":"charity","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":false,"link":"https://www.redcross.org/give-blood","key":"6509779"}
    ,{"activity":"Volunteer and help out at a senior center","availability":0.1,"type":"charity","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"3920096"}
    ,{"activity":"Shop at support your local farmers market","availability":0.1,"type":"relaxation","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8979931"}
    ,{"activity":"Learn a new recipe","availability":0.05,"type":"cooking","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6553978"}
    ,{"activity":"Create a cookbook with your favorite recipes","availability":0.05,"type":"cooking","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"1947449"}
    ,{"activity":"Create a compost pile","availability":0.15,"type":"diy","participants":1,"price":0.0,"accessibility":"Major challenges","duration":"hours","kidFriendly":true,"link":"","key":"8631548"},
    ,{"activity":"Volunteer at your local food bank","availability":0.1,"type":"charity","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"2055368"}
    ,{"activity":"Create or update your resume","availability":0.1,"type":"busywork","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9364041"}
    ,{"activity":"Paint the first thing you see","availability":0.2,"type":"recreational","participants":1,"price":0.25,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1162360"}
    ,{"activity":"Start a blog for something you're passionate about","availability":0.1,"type":"recreational","participants":1,"price":0.05,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"8364626"}
    ,{"activity":"Start a garden","availability":0.35,"type":"recreational","participants":1,"price":0.3,"accessibility":"Major challenges","duration":"hours","kidFriendly":true,"link":"","key":"1934228"}
    ,{"activity":"Clean out your closet and donate the clothes you've outgrown","availability":0.1,"type":"charity","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9026787"}
    ,{"activity":"Catch up on world news","availability":0.07,"type":"recreational","participants":1,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6596257"}
    ,{"activity":"Create a personal website","availability":0.12,"type":"recreational","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"3141417"}
    ,{"activity":"Listen to a new podcast","availability":0.12,"type":"relaxation","participants":1,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4124860"}
    ,{"activity":"Have a paper airplane contest with some friends","availability":0.05,"type":"social","participants":4,"price":0.02,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8557562"}
    ,{"activity":"Learn calligraphy","availability":0.1,"type":"education","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"weeks","kidFriendly":true,"link":"","key":"4565537"}
    ,{"activity":"Start a collection","availability":0.5,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"1718657"}
    ,{"activity":"Go to a local thrift shop","availability":0.2,"type":"recreational","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8503795"}
    ,{"activity":"Make a couch fort","availability":0.08,"type":"recreational","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2352669"}
    ,{"activity":"Pick up litter around your favorite park","availability":0.05,"type":"charity","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4894697"}
    ,{"activity":"Buy a new house decoration","availability":0.3,"type":"recreational","participants":1,"price":0.4,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3456114"}
    ,{"activity":"Write a thank you letter to an influential person in your life","availability":0.1,"type":"social","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4101229"}
    ,{"activity":"Clean out your car","availability":0.08,"type":"busywork","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2896176"}
    ,{"activity":"Write a short story","availability":0.1,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"6301585"}
    ,{"activity":"Do something nice for someone you care about","availability":0.1,"type":"social","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8321894"}
    ,{"activity":"Think of a new business idea","availability":0.05,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6808057"}
    ,{"activity":"Clean out your garage","availability":0.1,"type":"busywork","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"7023703"}
    ,{"activity":"Learn to sew on a button","availability":0.1,"type":"education","participants":1,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8731971"}
    ,{"activity":"Learn how to french braid hair","availability":0.1,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8926492"}
    ,{"activity":"Learn how to whistle with your fingers","availability":0.0,"type":"education","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2790297"}
    ,{"activity":"Learn to write with your nondominant hand","availability":0.02,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1645485"}
    ,{"activity":"Make bread from scratch","availability":0.2,"type":"cooking","participants":1,"price":0.2,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"4809815"}
    ,{"activity":"Make a budget","availability":0.1,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4379552"}
    ,{"activity":"Learn how to write in shorthand","availability":0.1,"type":"education","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"days","kidFriendly":true,"link":"","key":"6778219"}
    ,{"activity":"Make a simple musical instrument","availability":0.25,"type":"music","participants":1,"price":0.4,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7091374"}
    ,{"activity":"Go to the gym","availability":0.1,"type":"recreational","participants":1,"price":0.2,"accessibility":"Minor challenges","duration":"hours","kidFriendly":false,"link":"","key":"4387026"}
    ,{"activity":"Try a food you don't like","availability":0.05,"type":"recreational","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6693574"}
    ,{"activity":"Conquer one of your fears","availability":0.1,"type":"recreational","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8344539"}
    ,{"activity":"Go to a concert with some friends","availability":0.4,"type":"social","participants":4,"price":0.6,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"4558850"}
    ,{"activity":"Go to the library and find an interesting book","availability":0.2,"type":"relaxation","participants":1,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8253550"}
    ,{"activity":"Go to an escape room","availability":0.3,"type":"social","participants":4,"price":0.5,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"5585829"}
    ,{"activity":"Go to a karaoke bar with some friends","availability":0.35,"type":"social","participants":4,"price":0.5,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"9072906"}
    ,{"activity":"Repaint a room in your house","availability":0.4,"type":"recreational","participants":1,"price":0.3,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"4877086"}
    ,{"activity":"Pull a harmless prank on one of your friends","availability":0.2,"type":"social","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1288934"}
    ,{"activity":"Take a spontaneous road trip with some friends","availability":0.3,"type":"social","participants":4,"price":0.2,"accessibility":"Few to no challenges","duration":"days","kidFriendly":true,"link":"","key":"2085321"}
    ,{"activity":"Go stargazing","availability":0.1,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8832605"}
    ,{"activity":"Invite some friends over for a game night","availability":0.2,"type":"social","participants":4,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"6613428"}
    ,{"activity":"Make homemade ice cream","availability":0.2,"type":"cooking","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3818400"}
    ,{"activity":"Start a daily journal","availability":0.0,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8779876"}
    ,{"activity":"Go to a music festival with some friends","availability":0.2,"type":"social","participants":4,"price":0.4,"accessibility":"Minor challenges","duration":"days","kidFriendly":true,"link":"","key":"6482790"}
    ,{"activity":"Make a bucket list","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2735499"}
    ,{"activity":"Binge watch a trending series","availability":0.2,"type":"recreational","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5881647"}
    ,{"activity":"Learn how to make a website","availability":0.3,"type":"education","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"9924423"}
    ,{"activity":"Create and follow a savings plan","availability":0.2,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9366464"}
    ,{"activity":"Watch a classic movie","availability":0.1,"type":"recreational","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8081693"}
    ,{"activity":"Plan a trip to another country","availability":0.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5554727"}
    ,{"activity":"Learn how the internet works","availability":0.1,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9414706"}
    ,{"activity":"Take a hike at a local park","availability":0.1,"type":"recreational","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"8724324"}
    ,{"activity":"Make tie dye shirts","availability":0.2,"type":"diy","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8092359"}
    ,{"activity":"Make a scrapbook with pictures of your favorite memories","availability":0.1,"type":"diy","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5554174"}
    ,{"activity":"Have a picnic with some friends","availability":0.1,"type":"social","participants":3,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"6813070"}
    ,{"activity":"Have a bonfire with your close friends","availability":0.1,"type":"social","participants":4,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"8442249"}
    ,{"activity":"Memorize the fifty states and their capitals","availability":0.0,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4179309"}
    ,{"activity":"Take a class at your local community center that interests you","availability":0.15,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8750692"}
    ,{"activity":"Resolve a problem you've been putting off","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9999999"}
    ,{"activity":"Make a new friend","availability":0.0,"type":"social","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1000000"}
    ,{"activity":"Learn origami","availability":0.3,"type":"education","participants":1,"price":0.2,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8394738"}
    ,{"activity":"Learn how to use a french press","availability":0.3,"type":"recreational","participants":1,"price":0.3,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/French_press","key":"4522866"}
    ,{"activity":"Read a formal research paper on an interesting subject","availability":0.1,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3352474"}
    ,{"activity":"Listen to a new music genre","availability":0,"type":"music","participants":1,"price":0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4708863"}
    ,{"activity":"Volunteer at your local food pantry","availability":0.1,"type":"charity","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"1878070"}
    ,{"activity":"Learn how to make an Alexa skill","availability":0.1,"type":"education","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html","key":"1592381"}
    ,{"activity":"Surprise your significant other with something considerate","availability":0.0,"type":"social","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6204657"}
    ,{"activity":"Learn Kotlin","availability":0.8,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://kotlinlang.org/","key":"3950821"}
    ,{"activity":"Go for a run","availability":0.9,"type":"recreational","participants":1,"price":0.0,"accessibility":"Major challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6852505"}
    ,{"activity":"Learn woodworking","availability":0.3,"type":"diy","participants":1,"price":0.3,"accessibility":"Minor challenges","duration":"weeks","kidFriendly":true,"link":"","key":"9216391"}
    ,{"activity":"Start a band","availability":0.8,"type":"music","participants":4,"price":0.3,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5675880"}
    ,{"activity":"Cook something together with someone","availability":0.8,"type":"cooking","participants":2,"price":0.3,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"1799120"}
    ,{"activity":"Have a jam session with your friends","availability":0.3,"type":"music","participants":5,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"2715253"}
    ,{"activity":"Learn GraphQL","availability":0.8,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://graphql.org/","key":"2167064"}
    ,{"activity":"Play basketball with a group of friends","availability":0.7,"type":"social","participants":5,"price":0.0,"accessibility":"Major challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8683473"}
    ,{"activity":"Learn the Chinese erhu","availability":0.4,"type":"music","participants":1,"price":0.6,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"2742452"}
    ,{"activity":"Start a webinar on a topic of your choice","availability":0.9,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"6826029"}
    ,{"activity":"Learn how to use an Arduino","availability":0.7,"type":"education","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Arduino","key":"8264223"}
    ,{"activity":"Go see a Broadway production","availability":0.3,"type":"recreational","participants":4,"price":0.8,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"4448913"}
    ,{"activity":"Learn Javascript","availability":0.9,"type":"education","participants":1,"price":0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"3469378"}
    ,{"activity":"Visit your past teachers","availability":0.7,"type":"social","participants":1,"price":0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8238918"}
    ,{"activity":"Research a topic you're interested in","availability":0.9,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"3561421"}
    ,{"activity":"Listen to music you haven't heard in a while","availability":0.9,"type":"music","participants":1,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4296813"}
    ,{"activity":"Go on a fishing trip with some friends","availability":0.4,"type":"social","participants":3,"price":0.4,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"3149232"}
    ,{"activity":"Bake a pie with some friends","availability":0.3,"type":"cooking","participants":3,"price":0.3,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"3141592"}
    ,{"activity":"Do yoga","availability":0.9,"type":"recreational","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4688012"}
    ,{"activity":"Visit a nearby museum","availability":0.7,"type":"recreational","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5490351"}
    ,{"activity":"Have a photo session with some friends","availability":0.8,"type":"social","participants":4,"price":0.05,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3305912"}
    ,{"activity":"Watch the sunset or the sunrise","availability":1.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4748214"}
    ,{"activity":"Play a volleyball match with some friends","availability":0.3,"type":"social","participants":4,"price":0.0,"accessibility":"Major challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4306710"}
    ,{"activity":"Host a movie marathon with some friends","availability":0.0,"type":"social","participants":3,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5914292"}
    ,{"activity":"Hold a video game tournament with some friends","availability":0.1,"type":"social","participants":4,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"2300257"}
    ,{"activity":"Write a poem","availability":0.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8688620"}
    ,{"activity":"Take a nap","availability":0.0,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6184514"}
    ,{"activity":"Mow your lawn","availability":0.3,"type":"busywork","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3590127"}
    ,{"activity":"Practice coding in your favorite lanaguage","availability":0.1,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7096020"}
    ,{"activity":"Write a song","availability":0.0,"type":"music","participants":1,"price":0.0,"accessibility":"Few to no challenges'","duration":"minutes","kidFriendly":true,"link":"","key":"5188388"}
    ,{"activity":"Play a video game","availability":0.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5534113"}
    ,{"activity":"Clean out your refrigerator","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9324336"}
    ,{"activity":"Study a foreign language","availability":0.1,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"weeks","kidFriendly":true,"link":"","key":"9765530"}
    ,{"activity":"Learn the NATO phonetic alphabet","availability":0.0,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/NATO_phonetic_alphabet","key":"6706598"}
    ,{"activity":"Solve a Rubik's cube","availability":0.1,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"4151544"}
    ,{"activity":"Make your own LEGO creation","availability":0.1,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1129748"}
    ,{"activity":"Plant a tree","availability":0.3,"type":"recreational","participants":1,"price":0.3,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"1942393"}
    ,{"activity":"Contribute code or a monetary donation to an open-source software project","availability":0.0,"type":"charity","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://github.com/explore","key":"7687030"}
    ,{"activity":"Uninstall unused apps from your devices","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2850593"}
    ,{"activity":"Prepare a dish from a foreign culture","availability":0.3,"type":"cooking","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8061754"}
    ,{"activity":"Patronize a local independent restaurant","availability":0.1,"type":"recreational","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5319204"}
    ,{"activity":"Give your pet ten minutes of focused attention","availability":0.0,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9937387"}
    ,{"activity":"Explore a park you have never been to before","availability":0.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8159356"}
    ,{"activity":"Configure two-factor authentication on your accounts","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Multi-factor_authentication","key":"1572120"}
    ,{"activity":"Create a meal plan for the coming week","availability":0.0,"type":"cooking","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3491470"}
    ,{"activity":"Watch a Khan Academy lecture on a subject of your choosing","availability":0.0,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://www.khanacademy.org/","key":"7154873"}
    ,{"activity":"Shred old documents you don't need anymore","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2430066"}
    ,{"activity":"Learn about a distributed version control system such as Git","availability":0.0,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Distributed_version_control","key":"9303608"}
    ,{"activity":"Write a note of appreciation to someone","availability":0.0,"type":"social","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1770521"}
    ,{"activity":"Draw something interesting","availability":0.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8033599"}
    ,{"activity":"Learn and play a new card game","availability":0.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://www.pagat.com","key":"9660022"}
    ,{"activity":"Write a list of things you are grateful for","availability":0.0,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2062010"}
    ,{"activity":"Organize a bookshelf","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"6098037"}
    ,{"activity":"Organize a cluttered drawer","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9714586"}
    ,{"activity":"Organize your music collection","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"3151646"}
    ,{"activity":"Organize your movie collection","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"6378359"}
    ,{"activity":"Learn Morse code","availability":0.0,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Morse_code","key":"3646173"}
    ,{"activity":"Go for a walk","availability":0.1,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4286250"}
    ,{"activity":"Mow your neighbor's lawn","availability":0.2,"type":"charity","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":false,"link":"","key":"1303906"}
    ,{"activity":"Compliment someone","availability":0.0,"type":"social","participants":2,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9149470"}
    ,{"activity":"Draft your living will","availability":0.5,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":false,"link":"https://www.investopedia.com/terms/l/livingwill.asp","key":"2360432"}
    ,{"activity":"Prepare a 72-hour kit","availability":0.5,"type":"busywork","participants":1,"price":0.5,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://www.ready.gov/kit","key":"4266522"}
    ,{"activity":"Color","availability":0.0,"type":"relaxation","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"5322987"}
    ,{"activity":"Organize your pantry","availability":0.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"3954882"}
    ,{"activity":"Back up important computer files","availability":0.2,"type":"busywork","participants":1,"price":0.2,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":false,"link":"","key":"9081214"}
    ,{"activity":"Memorize a favorite quote or poem","availability":0.8,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9008639"}
    ,{"activity":"Do something you used to do as a kid","availability":0.8,"type":"relaxation","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"8827573"}
    ,{"activity":"Organize your basement","availability":0.9,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8203595"}
    ,{"activity":"Sit in the dark and listen to your favorite music with no distractions","availability":1.0,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":false,"link":"","key":"9908721"}
    ,{"activity":"Do a jigsaw puzzle","availability":1.0,"type":"recreational","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Jigsaw_puzzle","key":"8550768"}
    ,{"activity":"Look at pictures and videos of cute animals","availability":1.0,"type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2565076"}
    ,{"activity":"Write a handwritten letter to somebody","availability":0.8,"type":"social","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"2277801"}
    ,{"activity":"Match your storage containers with their lids","availability":1.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4940907"}
    ,{"activity":"Start a family tree","availability":1.0,"type":"social","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Family_tree","key":"6825484"}
    ,{"activity":"Look at your finances and find one way to save money","availability":1.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":false,"link":"","key":"5977626"}
    ,{"activity":"Organize your dresser","availability":1.0,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7556665"}
    ,{"activity":"Learn the periodic table","availability":0.6,"type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Periodic_table","key":"3621244"}
    ,{"activity":"Improve your touch typing","availability":0.8,"type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":false,"link":"https://en.wikipedia.org/wiki/Touch_typing","key":"2526437"}
    ,{"activity":"Donate to your local food bank","availability":0.8,"type":"charity","participants":1,"price":0.5,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"4150284"}
    ,{"activity":"Learn how to beatbox","availability":1.0,"type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Beatboxing","key":"8731710"}
];

const button = document.getElementById('btn');
const activity = document.getElementById('activity');
const participants  = document.getElementById('participants');
const type  = document.getElementById('type');
const paragraph  = document.getElementById('paragraph');
const date = document.getElementById('date');
const tweet = document.getElementById('tweet');

// fetching the data from the API
function getActivity(){
    let random = Math.floor(Math.random()*196)+1;
    let activity = data[random];
    // Sending the activity
    showResponse(activity);
}

// Puts the data on the UI and calls another function which makes the para visible.
function showResponse(data){
    let url = "";
    activity.innerHTML = data.activity;
    participants.innerHTML = data.participants;
    type.innerHTML = data.type;
    if(data.link == ""){
        url = "";
    } else {
        url = data.link;
    }
    tweet.href = "https://twitter.com/intent/tweet/?text=Bored? "+data.activity+"&hashtags="+data.type+" "+url+ " (Im-bored.now.sh)";
    showParagraph();
}

function showParagraph(){
    paragraph.style.visibility = "visible";
}
// Click event listner.
button.addEventListener("click", function(){
    getActivity();
});

function getDate(){
    let currentdate = new Date().getFullYear();
    return currentdate;
}
date.innerHTML = "© "+getDate()+" I'm bored";
