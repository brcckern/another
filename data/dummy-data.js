const Lessons = require("../models/lessons");
const Exams = require("../models/exams");
const Questions = require("../models/questions");

async function populate()
{
    const count = await Lessons.count();
    if(count == 0)
    {
        await Lessons.bulkCreate([
            {name: "Biyoloji"},
            {name: "Fizik"},
            {name: "Kimya"},
            {name: "Matematik"},
            {name: "Tarih"},
            {name: "Türkçe"},
        ]);

        await Exams.create({
            title: "Fizik (Temel Seviye)",
            description: "Fizik dersindeki konulara henüz tam olarak hakim değilseniz bu sınav tam size göre. Sınavın tamamı TYT konularını içermekle beraber zorluk olarak temel seviyededir.",
            image: "fizik-1.jpg",
            questionAmount: 10,
            examFinishedNumber: 0,
            lessonId: 2
        });

        await Exams.create({
            title: "Matematik (Temel Seviye)",
            description: "Matematik dersindeki konulara henüz tam olarak hakim değilseniz bu sınav tam size göre. Sınavın tamamı TYT konularını içermekle beraber zorluk olarak temel seviyededir.",
            image: "matematik-1.jpg",
            questionAmount: 12,
            examFinishedNumber: 0,
            lessonId: 4
        });

        await Exams.create({
            title: "Türkçe (Temel Seviye)",
            description: "Türkçe dersindeki konulara henüz tam olarak hakim değilseniz bu sınav tam size göre. Sınavın tamamı TYT konularını içermekle beraber zorluk olarak temel seviyededir.",
            image: "turkce-1.jpg",
            questionAmount: 10,
            examFinishedNumber: 0,
            lessonId: 6
        });

        await Exams.create({
            title: "Türkçe (İleri Seviye)",
            description: "Türkçe dersindeki konulara hakim olduğunuzu düşünüyorsanız bu sınav tam size göre. Sınavın tamamı TYT konularını içermekle beraber zorluk olarak ileri seviyededir.",
            image: "turkce-2.jpg",
            questionAmount: 10,
            examFinishedNumber: 0,
            lessonId: 6
        });

        await Exams.create({
            title: "Kimya (Temel Seviye)",
            description: "Kimya dersindeki konulara henüz tam olarak hakim değilseniz bu sınav tam size göre. Sınavın tamamı TYT konularını içermekle beraber zorluk olarak temel seviyededir.",
            image: "kimya-1.jpg",
            questionAmount: 10,
            examFinishedNumber: 0,
            lessonId: 3
        });

        // Fizik (Temel Seviye)
        await Questions.create({
            questionNumber: 1,
            questionContent: "Kütlesi 10 kg olan bir cismin ivmesi 2 m/s^2 olarak veriliyor.",
            question: "Buna göre cismin üzerine etki eden kuvvet kaç N'dir?",
            firstOption: "5 N",
            secondOption: "10 N",
            thirdOption: "15 N",
            fourthOption: "20 N",
            fifthOption: "25 N",
            correctAnswer: "20 N",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 2,
            questionContent: "",
            question: "Bir cismin hareketiyle ilgili olarak yapılan iş, aşağıdakilerden hangisiyle doğru orantılıdır?",
            firstOption: "Cismin kütlesi",
            secondOption: "Cismin ivmesi",
            thirdOption: "Cismin hızı",
            fourthOption: "Cismin yer değiştirme miktarı",
            fifthOption: "Cismin sürtünmesi",
            correctAnswer: "Cismin yer değiştirme miktarı",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 3,
            questionContent: "",
            question: "Bir cisme etki eden net kuvvetin sıfır olduğu durumda cismin hareketi ile ilgili olarak aşağıdaki ifadelerden hangisi doğrudur?",
            firstOption: "Cisim durağandır.",
            secondOption: "Cisim sabit hızla doğrusal hareket yapar.",
            thirdOption: "Cisim hareket eder, ancak ivme yoktur.",
            fourthOption: "Cismin hızı sabittir, ancak yönü değişebilir.",
            fifthOption: "Cismin ivmesi sıfırdır.",
            correctAnswer: "Cisim durağandır.",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 4,
            questionContent: "",
            question: "Bir kuvvetin yaptığı işin hesaplanması için hangi büyüklük kullanılır?",
            firstOption: "Kuvvetin büyüklüğü",
            secondOption: "Kuvvetin yönü",
            thirdOption: "Kuvvetin ivmesi",
            fourthOption: "Kuvvetin hareket yönü",
            fifthOption: "Kuvvetin noktasal uygulanma alanı",
            correctAnswer: "Kuvvetin büyüklüğü",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 5,
            questionContent: "",
            question: "Sabit hızla hareket eden bir cisim hangi türde hareket etmektedir?",
            firstOption: "Doğrusal",
            secondOption: "Dairesel",
            thirdOption: "Yer değiştirme",
            fourthOption: "Düşey",
            fifthOption: "Hız",
            correctAnswer: "Doğrusal",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 6,
            questionContent: "",
            question: "Bir cismin ivmesi sabitse, hızı nasıl değişir?",
            firstOption: "Hız sabit kalır.",
            secondOption: "Hız artar.",
            thirdOption: "Hız azalır.",
            fourthOption: "Hız artar ya da azalır, ancak ivme sabittir.",
            fifthOption: "Hız tamamen durur.",
            correctAnswer: "Hız artar ya da azalır, ancak ivme sabittir.",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 7,
            questionContent: "",
            question: "Bir cismin kütlesi artarsa, aynı kuvvet altında cismin hareketi nasıl değişir?",
            firstOption: "Hareket hızlanır.",
            secondOption: "Hareket yavaşlar.",
            thirdOption: "Hareket ivmesiz olur.",
            fourthOption: "Hareketi etkilemez.",
            fifthOption: "Hareket tamamen durur.",
            correctAnswer: "Hareketi etkilemez.",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 8,
            questionContent: "",
            question: "Aşağıdakilerden hangisi Newton’un hareket yasalarından biridir?",
            firstOption: "Hareketin devamı yasası",
            secondOption: "Eylemsizlik yasası",
            thirdOption: "Kuvvetin korunumu yasası",
            fourthOption: "Karşıt etki tepki yasası",
            fifthOption: "Kuvvetin alanı yasası",
            correctAnswer: "Eylemsizlik yasası",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 9,
            questionContent: "",
            question: "Aşağıdakilerden hangisi hız grafiğine göre hareket eden bir cismin durumunu gösterir?",
            firstOption: "Sabit hızla hareket",
            secondOption: "Hızlanarak hareket",
            thirdOption: "Yavaşlayarak hareket",
            fourthOption: "Duraklama",
            fifthOption: "Dönüş",
            correctAnswer: "Sabit hızla hareket",
            examId: 1
        });
        
        await Questions.create({
            questionNumber: 10,
            questionContent: "",
            question: "Sabit kuvvet altında, cismin ivmesiyle hangi fiziksel büyüklük doğru orantılıdır?",
            firstOption: "Cismin kütlesi",
            secondOption: "Cismin hızı",
            thirdOption: "Cismin momentumu",
            fourthOption: "Cismin potansiyel enerjisi",
            fifthOption: "Cismin kinetik enerjisi",
            correctAnswer: "Cismin kütlesi",
            examId: 1
        });

        // Matematik (Temel Seviye)
        await Questions.create({
            questionNumber: 1,
            questionContent: "Bir çemberin çapı 14 cm olarak veriliyor.",
            question: "Buna göre çemberin alanı kaç cm²'dir?",
            firstOption: "49π",
            secondOption: "98π",
            thirdOption: "196π",
            fourthOption: "245π",
            fifthOption: "392π",
            correctAnswer: "49π",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 2,
            questionContent: "Üçgenin bir açısı 40°, diğer açısı 60° olarak veriliyor.",
            question: "Buna göre açının ölçüsü kaç derecedir?",
            firstOption: "40",
            secondOption: "50",
            thirdOption: "60",
            fourthOption: "70",
            fifthOption: "80",
            correctAnswer: "80",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 3,
            questionContent: "Bir dairenin çevresi 24π cm olarak veriliyor.",
            question: "Buna göre dairenin yarıçapı kaç cm'dir?",
            firstOption: "4",
            secondOption: "6",
            thirdOption: "8",
            fourthOption: "10",
            fifthOption: "12",
            correctAnswer: "6",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 4,
            questionContent: "Bir dörtgenin iç açılarından biri 80°, diğer üç açısı sırasıyla 90°, 100° ve 110° olarak veriliyor.",
            question: "Buna göre dörtgenin bir iç açısı kaç derecedir?",
            firstOption: "100",
            secondOption: "110",
            thirdOption: "120",
            fourthOption: "130",
            fifthOption: "140",
            correctAnswer: "130",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 5,
            questionContent: "Bir dörtgenin karşılıklı kenarları arasındaki açıların toplamı 360° olarak veriliyor.",
            question: "Buna göre dörtgenin kaç tane iç açısı vardır?",
            firstOption: "2",
            secondOption: "3",
            thirdOption: "4",
            fourthOption: "5",
            fifthOption: "6",
            correctAnswer: "4",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 6,
            questionContent: "Bir dik üçgenin hipotenüsü 10 cm, bir dik açısının kenarı 6 cm olarak veriliyor.",
            question: "Buna göre diğer dik açısının kenarı kaç cm'dir?",
            firstOption: "6",
            secondOption: "7",
            thirdOption: "8",
            fourthOption: "9",
            fifthOption: "10",
            correctAnswer: "8",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 7,
            questionContent: "Bir çemberin çevresi 24π cm olarak veriliyor.",
            question: "Buna göre çemberin çapı kaç cm'dir?",
            firstOption: "4",
            secondOption: "6",
            thirdOption: "8",
            fourthOption: "10",
            fifthOption: "12",
            correctAnswer: "6",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 8,
            questionContent: "Bir dikdörtgenin kenarları sırasıyla 6 cm ve 8 cm olarak veriliyor.",
            question: "Buna göre dikdörtgenin alanı kaç cm²'dir?",
            firstOption: "12",
            secondOption: "30",
            thirdOption: "48",
            fourthOption: "64",
            fifthOption: "128",
            correctAnswer: "48",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 9,
            questionContent: "2x - 5 = 11 denklemi için x değeri bulunmaktadır.",
            question: "Buna göre x'in değeri kaçtır?",
            firstOption: "4",
            secondOption: "5",
            thirdOption: "6",
            fourthOption: "7",
            fifthOption: "8",
            correctAnswer: "8",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 10,
            questionContent: "4x² + 9x + 2 = 0 denkleminin kökleri toplamı hesaplanmaktadır.",
            question: "Buna göre denklemin kökleri toplamı kaçtır?",
            firstOption: "-9/4",
            secondOption: "-2/9",
            thirdOption: "-9/2",
            fourthOption: "-4/9",
            fifthOption: "-1/2",
            correctAnswer: "-9/4",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 11,
            questionContent: "Bir doğrunun eğimi 2/3 olarak verilmektedir.",
            question: "Buna göre doğrunun y eksenini kestiği noktanın y koordinatı kaçtır?",
            firstOption: "2",
            secondOption: "3",
            thirdOption: "4",
            fourthOption: "5",
            fifthOption: "6",
            correctAnswer: "4",
            examId: 2
        });
        
        await Questions.create({
            questionNumber: 12,
            questionContent: "Bir düzlem üzerinde 3 nokta verilmektedir.",
            question: "Buna göre noktalardan kaç adet doğru geçer?",
            firstOption: "1",
            secondOption: "2",
            thirdOption: "3",
            fourthOption: "4",
            fifthOption: "5",
            correctAnswer: "3",
            examId: 2
        });        

        // Türkçe (Temel Seviye)
        await Questions.create({
            questionNumber: 1,
            questionContent: "",
            question: "Metinlerde yer alan sözcüklerin anlamlarını, köklerini ve türevlerini inceleyen dil bilim dalına ne ad verilir?",
            firstOption: "Sözlükçülük",
            secondOption: "Gramer",
            thirdOption: "Dilbilim",
            fourthOption: "Edebiyat",
            fifthOption: "Anlatım",
            correctAnswer: "Dilbilim",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 2,
            questionContent: "",
            question: "Bir metinde yazarın kişisel duygu ve düşüncelerini, okuyucuya aktarmak için kullandığı anlatım türü hangisidir?",
            firstOption: "Betimleyici Anlatım",
            secondOption: "Öyküleyici Anlatım",
            thirdOption: "İkna Edici Anlatım",
            fourthOption: "Tartışmacı Anlatım",
            fifthOption: "Duygu Yüklü Anlatım",
            correctAnswer: "Duygu Yüklü Anlatım",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 3,
            questionContent: "",
            question: "Dilin ses özelliklerini, sözcüklerin yapısını, cümlelerin kuruluşunu, anlamını ve kullanımını inceleyen bilim dalı aşağıdakilerden hangisidir?",
            firstOption: "Edebiyat",
            secondOption: "Dilbilim",
            thirdOption: "Dilbilgisi",
            fourthOption: "Anlatım Bilgisi",
            fifthOption: "Sözlükçülük",
            correctAnswer: "Dilbilgisi",
            examId: 3
        });

        await Questions.create({
            questionNumber: 4,
            questionContent: "",
            question: "Aşağıdaki atasözlerinden hangisi, “herhangi bir işte karar verememek, sürekli kararsız kalmak” anlamına gelir?",
            firstOption: "Damlaya damlaya göl olur.",
            secondOption: "El elin eşeğidir.",
            thirdOption: "Görünen köy kılavuz istemez.",
            fourthOption: "Eşeğe altın semer vursalar, eşek yine eşektir.",
            fifthOption: "İşleyen demir pas tutmaz.",
            correctAnswer: "El elin eşeğidir.",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 5,
            questionContent: "",
            question: "Bir metinde olayın nerede, ne zaman ve nasıl gerçekleştiğini anlatan anlatım türü hangisidir?",
            firstOption: "Betimleyici Anlatım",
            secondOption: "Öyküleyici Anlatım",
            thirdOption: "İkna Edici Anlatım",
            fourthOption: "Tartışmacı Anlatım",
            fifthOption: "Duygu Yüklü Anlatım",
            correctAnswer: "Betimleyici Anlatım",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 6,
            questionContent: "",
            question: "Bir metinde olayların nedenlerini, sonuçlarını ve ilişkilerini inceleyen anlatım türü aşağıdakilerden hangisidir?",
            firstOption: "Betimleyici Anlatım",
            secondOption: "Öyküleyici Anlatım",
            thirdOption: "İkna Edici Anlatım",
            fourthOption: "Tartışmacı Anlatım",
            fifthOption: "Açıklayıcı Anlatım",
            correctAnswer: "Açıklayıcı Anlatım",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 7,
            questionContent: "",
            question: "Bir metinde yazarın bir konuyu savunmak için kanıtlar sunarak, okuyucuyu ikna etmeye çalıştığı anlatım türü hangisidir?",
            firstOption: "Betimleyici Anlatım",
            secondOption: "Öyküleyici Anlatım",
            thirdOption: "İkna Edici Anlatım",
            fourthOption: "Tartışmacı Anlatım",
            fifthOption: "Açıklayıcı Anlatım",
            correctAnswer: "İkna Edici Anlatım",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 8,
            questionContent: "",
            question: "Aşağıdaki cümlelerin hangisinde kıyaslama yapılır?",
            firstOption: "Onun sesi bir kuşun ötüşü gibidir.",
            secondOption: "Bahçede çiçekler açmış, rengarenk bir hal almıştı.",
            thirdOption: "O gün hava çok güzeldi, gökyüzü masmaviydi.",
            fourthOption: "Dalgalar kıyıya vuruyor, deniz kenarında beyaz köpükler oluşuyordu.",
            fifthOption: "Rüzgar ağaç dallarını sallıyor, yapraklar hışırdıyordu.",
            correctAnswer: "Onun sesi bir kuşun ötüşü gibidir.",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 9,
            questionContent: "",
            question: "Bir metinde kişi, yer, zaman ve olayların betimlenmesine ne ad verilir?",
            firstOption: "Anlatım",
            secondOption: "Kurgu",
            thirdOption: "Ana fikir",
            fourthOption: "Yapı",
            fifthOption: "Ortam",
            correctAnswer: "Ortam",
            examId: 3
        });
        
        await Questions.create({
            questionNumber: 10,
            questionContent: "",
            question: "Bir cümlede, ‘kim, neyi, nerede, ne zaman, niçin, nasıl’ sorularına cevap veren kısıma ne ad verilir?",
            firstOption: "Özne",
            secondOption: "Yüklem",
            thirdOption: "Nesne",
            fourthOption: "Zarf",
            fifthOption: "Tümleç",
            correctAnswer: "Zarf",
            examId: 3
        });

        // Türkçe (İleri Seviye)
        await Questions.create({
            questionNumber: 1,
            questionContent: "Bilim insanları, doğadaki olayları anlamak ve açıklamak için sürekli olarak gözlem yapar ve deneyler gerçekleştirirler. Ancak, tüm bu çabalarına rağmen bazı olayları henüz tam olarak açıklayabilmiş değillerdir. Örneğin, evrendeki karanlık madde ve karanlık enerjinin ne olduğu konusunda net bir bilgiye sahip değiliz. Buna rağmen, bu bilinmeyenler hakkında çeşitli teoriler ortaya atılmakta ve bu teoriler doğrultusunda araştırmalar devam etmektedir. Bu, bilimsel sürecin dinamik ve sürekli değişen doğasının bir göstergesidir.",
            question: "Bu parçada aşağıdakilerden hangisine değinilmemiştir?",
            firstOption: "Bilim insanlarının doğayı anlamak için yaptıkları çalışmalar",
            secondOption: "Karanlık madde ve enerjinin tam olarak bilinmediği",
            thirdOption: "Bilimsel sürecin dinamik ve değişken olduğu",
            fourthOption: "Bilimsel araştırmaların maliyetlerinin yüksek olduğu",
            fifthOption: "Teorilerin doğrultusunda araştırmaların sürdüğü",
            correctAnswer: "Bilimsel araştırmaların maliyetlerinin yüksek olduğu",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 2,
            questionContent: "Sanat, insanoğlunun varoluşsal sorunlarına ışık tutar ve onun iç dünyasını zenginleştirir. Sanatçılar, yarattıkları eserlerle hem kendi duygularını ifade eder hem de izleyicinin duygusal ve düşünsel dünyasında derin etkiler bırakırlar. Edebiyat, resim, heykel, müzik gibi farklı sanat dalları, insan ruhunun çeşitli yönlerini ortaya koyar ve yaşamı anlamlandırma çabasında önemli bir rol oynar.",
            question: "Bu parçada aşağıdaki sorulardan hangisinin cevabı yoktur?",
            firstOption: "Sanatın insanoğlunun iç dünyasını nasıl etkilediği",
            secondOption: "Sanatçıların duygularını nasıl ifade ettikleri",
            thirdOption: "Farklı sanat dallarının insan ruhuna katkısı",
            fourthOption: "Sanatın maddi kazanç sağlamadaki rolü",
            fifthOption: "Sanatın yaşamı anlamlandırmadaki önemi",
            correctAnswer: "Sanatın maddi kazanç sağlamadaki rolü",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 3,
            questionContent: "Eğitim sisteminin temel amacı, bireyleri bilgiyle donatmak kadar onları eleştirel düşünebilen, sorgulayan ve yaratıcı bireyler olarak yetiştirmektir. Ancak günümüzde, eğitim sistemleri çoğunlukla ezberci yaklaşımlar üzerine kuruludur. Bu durum, öğrencilerin sadece bilgi depolayan bireyler olarak yetişmesine neden olmaktadır. Oysa ki bilgiye ulaşma yollarını bilen, analiz ve sentez yapabilen bireyler, toplumsal gelişim için çok daha önemlidir.",
            question: "Bu parçada vurgulanmak istenen düşünce aşağıdakilerden hangisidir?",
            firstOption: "Eğitim sistemleri genellikle ezberci yaklaşımlar üzerine kuruludur.",
            secondOption: "Bireylerin bilgiye ulaşma yollarını bilmeleri önemlidir.",
            thirdOption: "Eleştirel düşünebilen bireyler yetiştirilmesi hedeflenmelidir.",
            fourthOption: "Ezbercilik, toplumsal gelişimi olumsuz etkiler.",
            fifthOption: "Eğitim sisteminin temel amacı, bireyleri bilgiyle donatmaktır.",
            correctAnswer: "Eleştirel düşünebilen bireyler yetiştirilmesi hedeflenmelidir.",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 4,
            questionContent: "Toplumsal yapının temeli olan aile, bireylerin ilk sosyal deneyimlerini kazandıkları yerdir. Aile içindeki ilişkiler, bireylerin kişilik gelişiminde önemli bir rol oynar. Özellikle çocukluk döneminde aileden alınan değerler, bireyin hayatı boyunca sürecek davranış kalıplarını oluşturur. Ancak modern toplumlarda aile yapısının değişmesi, bu süreçte bazı aksaklıklara neden olabilmektedir.",
            question: "Bu parçada aşağıdakilerden hangisine değinilmiştir?",
            firstOption: "Aile yapısının değişmesinin sonuçlarına",
            secondOption: "Bireylerin kişilik gelişiminde ailenin rolüne",
            thirdOption: "Modern toplumların aile üzerindeki etkilerine",
            fourthOption: "Aile içi ilişkilerin bireyler üzerindeki etkilerine",
            fifthOption: "Çocukluk döneminde alınan değerlerin önemine",
            correctAnswer: "Aile yapısının değişmesinin sonuçlarına",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 5,
            questionContent: "Dil, sadece bir iletişim aracı olmanın ötesinde, bir milletin kültürünü, tarihini ve toplumsal değerlerini yansıtan bir aynadır. Dil aracılığıyla nesiller arasında bilgi ve değer aktarımı sağlanır. Bu nedenle, bir dilin zenginliği ve derinliği, o milletin kültürel zenginliğinin de bir göstergesidir. Ancak küreselleşmenin etkisiyle bazı dillerin giderek zayıfladığı ve hatta yok olma tehlikesiyle karşı karşıya olduğu gözlenmektedir.",
            question: "Bu parçadan çıkarılabilecek en kapsamlı sonuç aşağıdakilerden hangisidir?",
            firstOption: "Dil, bir milletin tarihini ve kültürünü yansıtır.",
            secondOption: "Küreselleşme bazı dillerin zayıflamasına yol açmaktadır.",
            thirdOption: "Dil, sadece bir iletişim aracı değildir.",
            fourthOption: "Bir dilin zenginliği, kültürel zenginliği gösterir.",
            fifthOption: "Küreselleşme, dil zenginliğini olumsuz etkilemektedir.",
            correctAnswer: "Küreselleşme, dil zenginliğini olumsuz etkilemektedir.",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 6,
            questionContent: "İnsanlar arasındaki ilişkilerde empati kurmanın önemi büyüktür. Empati, karşımızdaki kişinin duygularını anlamak ve ona bu anlayışla yaklaşmak demektir. Empati kurabilen insanlar, daha sağlıklı ve sürdürülebilir ilişkiler geliştirebilirler. Çünkü empati, karşılıklı anlayışı ve saygıyı pekiştirir. Ancak empati eksikliği, çoğu zaman çatışmalara ve anlaşmazlıklara yol açar.",
            question: "Bu parçada empati kurmanın hangi özelliği vurgulanmıştır?",
            firstOption: "Duygusal zeka ile olan ilişkisi",
            secondOption: "İnsan ilişkilerini güçlendirmesi",
            thirdOption: "Çatışmaları önlemesi",
            fourthOption: "Karşılıklı saygıyı artırması",
            fifthOption: "Anlaşmazlıkları çözmesi",
            correctAnswer: "İnsan ilişkilerini güçlendirmesi",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 7,
            questionContent: "Küresel ısınma, dünyanın iklim dengelerini altüst eden ve yaşamı tehdit eden ciddi bir sorundur. Bu sorun, sadece buzulların erimesine ve deniz seviyelerinin yükselmesine neden olmakla kalmamakta, aynı zamanda hava olaylarının şiddetlenmesine de yol açmaktadır. Artan sıcaklıklar, kuraklık ve su kaynaklarının azalması gibi problemlere sebep olurken, ekosistemlerin dengesini de bozmaktadır. Bu nedenle, küresel ısınmayla mücadele etmek, insanlık için hayati bir önem taşımaktadır.",
            question: "Bu parçada küresel ısınmanın neden olduğu sonuçlardan hangisine değinilmemiştir?",
            firstOption: "Buzulların erimesi",
            secondOption: "Deniz seviyelerinin yükselmesi",
            thirdOption: "Hava olaylarının şiddetlenmesi",
            fourthOption: "Kuraklık ve su kaynaklarının azalması",
            fifthOption: "Orman yangınlarının artması",
            correctAnswer: "Orman yangınlarının artması",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 8,
            questionContent: "Sanayi Devrimi ile başlayan teknolojik ilerlemeler, insan hayatını her açıdan etkilemiştir. Bu ilerlemeler, üretim süreçlerinin hızlanmasına, verimliliğin artmasına ve yaşam standartlarının yükselmesine katkı sağlamıştır. Ancak teknolojinin bu hızlı gelişimi, çevre sorunlarını da beraberinde getirmiştir. Hava ve su kirliliği, doğal kaynakların tükenmesi gibi problemler, teknolojik gelişmelerin olumsuz yanları olarak karşımıza çıkmaktadır.",
            question: "Bu parçada teknolojik gelişmelerin hangi yönüne vurgu yapılmıştır?",
            firstOption: "Üretim süreçlerini hızlandırması",
            secondOption: "Yaşam standartlarını yükseltmesi",
            thirdOption: "Çevre sorunlarına yol açması",
            fourthOption: "Verimliliği artırması",
            fifthOption: "Doğal kaynakları tüketmesi",
            correctAnswer: "Çevre sorunlarına yol açması",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 9,
            questionContent: "Edebiyat, insanın kendini ifade etme biçimlerinden biridir. Şiir, roman, öykü gibi türlerle bireyler, duygu ve düşüncelerini dile getirirler. Edebiyat eserleri, sadece bireysel duyguları değil, toplumsal olayları ve düşünceleri de yansıtır. Bu sayede, edebi eserler hem bireysel hem de toplumsal birer belge niteliği taşır. Edebiyat, bu çok yönlü yapısıyla kültürel birikimin korunmasına ve aktarılmasına katkı sağlar.",
            question: "Bu parçada edebiyatın hangi işlevine değinilmemiştir?",
            firstOption: "Bireysel duyguları ifade etme",
            secondOption: "Toplumsal olayları yansıtma",
            thirdOption: "Kültürel birikimi koruma",
            fourthOption: "Toplumsal düşünceleri aktarma",
            fifthOption: "Eğitici ve öğretici olma",
            correctAnswer: "Eğitici ve öğretici olma",
            examId: 4
        });
        
        await Questions.create({
            questionNumber: 10,
            questionContent: "Birçok dil bilgisi kuralının yanında noktalama işaretleri de yazılı anlatımda büyük bir öneme sahiptir. Noktalama işaretleri, cümlelerin doğru anlaşılmasını ve anlatımın akıcılığını sağlar. Yanlış veya eksik kullanılan noktalama işaretleri, anlatım bozukluklarına ve anlam kaymalarına neden olabilir. Örneğin, virgülün doğru kullanımı, cümledeki anlamın açıkça anlaşılmasını sağlar ve cümlenin bölümlerini net bir şekilde ayırır.",
            question: "Bu parçada noktalama işaretleriyle ilgili olarak aşağıdakilerden hangisine değinilmemiştir?",
            firstOption: "Noktalama işaretlerinin yazılı anlatımdaki önemi",
            secondOption: "Yanlış kullanılan noktalama işaretlerinin sonuçları",
            thirdOption: "Noktalama işaretlerinin anlatım akıcılığını sağladığı",
            fourthOption: "Virgülün doğru kullanımı",
            fifthOption: "Noktalama işaretlerinin eğitimde öğretilmesi",
            correctAnswer: "Noktalama işaretlerinin eğitimde öğretilmesi",
            examId: 4
        });

        // Kimya (Temel Seviye)
        await Questions.create({
            questionNumber: 1,
            questionContent: "Atomlar, proton, nötron ve elektronlardan oluşur. Protonlar ve nötronlar çekirdekte yer alırken, elektronlar çekirdek etrafındaki enerji seviyelerinde bulunur. Bir atomun kimyasal özelliklerini belirleyen elektronların yerleşim düzenidir.",
            question: "Atomun kimyasal özelliklerini belirleyen faktör aşağıdakilerden hangisidir?",
            firstOption: "Protonların sayısı",
            secondOption: "Nötronların sayısı",
            thirdOption: "Çekirdeğin kütlesi",
            fourthOption: "Elektronların yerleşim düzeni",
            fifthOption: "Çekirdeğin yükü",
            correctAnswer: "Elektronların yerleşim düzeni",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 2,
            questionContent: "Kimyasal tepkimeler, maddelerin kimyasal özelliklerinin değiştiği süreçlerdir. Bu tepkimelerde atomlar yeniden düzenlenir ve yeni maddeler oluşur. Tepkimeye giren maddelere reaktant, oluşan maddelere ise ürün denir.",
            question: "Kimyasal tepkimelerde tepkimeye giren maddelere ne ad verilir?",
            firstOption: "Ürün",
            secondOption: "Reaktant",
            thirdOption: "Bileşik",
            fourthOption: "Çözelti",
            fifthOption: "Karışım",
            correctAnswer: "Reaktant",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 3,
            questionContent: "Maddelerin halleri, katı, sıvı ve gaz olmak üzere üç temel fazda bulunur. Katı haldeki maddeler belirli bir şekil ve hacme sahiptir, sıvılar belirli bir hacme sahip olup, bulundukları kabın şeklini alırlar, gazlar ise ne belirli bir şekil ne de hacme sahiptir ve bulundukları kabın tamamını doldururlar.",
            question: "Aşağıdaki maddelerden hangisi katı, sıvı ve gaz halde bulunabilir?",
            firstOption: "Demir",
            secondOption: "Alüminyum",
            thirdOption: "Su",
            fourthOption: "Oksijen",
            fifthOption: "Karbon",
            correctAnswer: "Su",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 4,
            questionContent: "Elementler, aynı tür atomlardan oluşan saf maddelerdir ve kimyasal yöntemlerle daha basit maddelere ayrılamazlar. Her elementin kendine özgü bir sembolü vardır ve bu semboller elementlerin kimyasal formüllerinde kullanılır.",
            question: "Aşağıdaki maddelerden hangisi bir elementtir?",
            firstOption: "Su",
            secondOption: "Karbon dioksit",
            thirdOption: "Hidrojen",
            fourthOption: "Tuz",
            fifthOption: "Şeker",
            correctAnswer: "Hidrojen",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 5,
            questionContent: "Periyodik tablo, elementlerin artan atom numaralarına göre sıralandığı ve benzer kimyasal özelliklere sahip elementlerin aynı sütunda yer aldığı tablodur. Periyodik tabloda yatay sıralara periyot, dikey sütunlara ise grup denir.",
            question: "Periyodik tabloda dikey sütunlara ne ad verilir?",
            firstOption: "Periyot",
            secondOption: "Grup",
            thirdOption: "Aynı",
            fourthOption: "Sıra",
            fifthOption: "Bölüm",
            correctAnswer: "Grup",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 6,
            questionContent: "Moleküller, iki veya daha fazla atomun kimyasal bağlarla bir araya gelerek oluşturduğu yapılardır. Moleküller, element molekülleri ve bileşik molekülleri olarak ikiye ayrılır. Element molekülleri, aynı tür atomlardan oluşurken, bileşik molekülleri farklı tür atomlardan oluşur.",
            question: "Aşağıdaki seçeneklerden hangisi bir bileşik molekülüne örnektir?",
            firstOption: "O2",
            secondOption: "H2",
            thirdOption: "N2",
            fourthOption: "H2O",
            fifthOption: "He",
            correctAnswer: "H2O",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 7,
            questionContent: "Asitler, sulu çözeltilerinde hidrojen iyonu (H+) veren maddelerdir. Bazlar ise sulu çözeltilerinde hidroksit iyonu (OH-) veren maddelerdir. Asitler genellikle ekşi tada sahiptir ve bazlar kaygan bir his verir.",
            question: "Aşağıdaki maddelerden hangisi bir bazdır?",
            firstOption: "HCl",
            secondOption: "NaOH",
            thirdOption: "H2SO4",
            fourthOption: "CH3COOH",
            fifthOption: "HNO3",
            correctAnswer: "NaOH",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 8,
            questionContent: "Kimyasal bağlar, atomlar arasında elektron alışverişi veya ortak kullanımı ile oluşur. İyonik bağlar, elektron alışverişi ile, kovalent bağlar ise elektronların ortak kullanımı ile meydana gelir. Metalik bağlar ise metal atomları arasında bulunur.",
            question: "İyonik bağlar nasıl oluşur?",
            firstOption: "Elektronların ortak kullanımı ile",
            secondOption: "Elektron alışverişi ile",
            thirdOption: "Proton alışverişi ile",
            fourthOption: "Nötronların ortak kullanımı ile",
            fifthOption: "Çekirdeklerin birleşmesi ile",
            correctAnswer: "Elektron alışverişi ile",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 9,
            questionContent: "Maddelerin belirli koşullar altında diğer maddelerle olan etkileşimleri kimyasal tepkime olarak adlandırılır. Kimyasal tepkimeler, maddelerin kimyasal özelliklerinin değiştiği ve yeni maddelerin oluştuğu süreçlerdir.",
            question: "Kimyasal tepkimelerde aşağıdakilerden hangisi meydana gelir?",
            firstOption: "Atom sayısının değişmesi",
            secondOption: "Atomların yeniden düzenlenmesi",
            thirdOption: "Atomların yok olması",
            fourthOption: "Nötronların dönüşümü",
            fifthOption: "Protonların kaybı",
            correctAnswer: "Atomların yeniden düzenlenmesi",
            examId: 5
        });
        
        await Questions.create({
            questionNumber: 10,
            questionContent: "Enerji, bir maddenin iş yapabilme kapasitesidir. Kimyasal enerji, maddelerin kimyasal bağlarında depolanan enerjidir. Bu enerji, kimyasal tepkimeler sırasında açığa çıkabilir veya soğurulabilir.",
            question: "Kimyasal enerji aşağıdaki maddelerden hangisinin yapısında depolanmıştır?",
            firstOption: "Su",
            secondOption: "Kömür",
            thirdOption: "Hava",
            fourthOption: "Tuz",
            fifthOption: "Demir",
            correctAnswer: "Kömür",
            examId: 5
        });
    } 
}

module.exports = populate;