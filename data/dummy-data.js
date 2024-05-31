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
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate id iste error excepturi iure, expedita natus earum iusto officiis minima facilis illo molestiae alias corrupti velit at vero.",
            image: "fizik-1.jpg",
            questionAmount: 10,
            activeOnHome: true,
            lessonId: 2
        });

        await Exams.create({
            title: "Matematik (Temel Seviye)",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate id iste error excepturi iure, expedita natus earum iusto officiis minima facilis illo molestiae alias corrupti velit at vero.",
            image: "matematik-1.jpg",
            questionAmount: 12,
            activeOnHome: true,
            lessonId: 4
        });

        await Exams.create({
            title: "Türkçe (Temel Seviye)",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate id iste error excepturi iure, expedita natus earum iusto officiis minima facilis illo molestiae alias corrupti velit at vero.",
            image: "turkce-1.jpg",
            questionAmount: 10,
            activeOnHome: true,
            lessonId: 6
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
    } 
}

module.exports = populate;