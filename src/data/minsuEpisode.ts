export type MinsuLine = { speaker: string; panel: number; sceneImage: string; fr: string; ko: string; en?: string }
export const minsuEpisode = {
  id: 'minsu-basketball-01',
  author: 'Minseo Jeon',
  title: '민수의 첫 번째 기회',
  titleFr: 'La première chance de Minsu',
  subtitle: '우연한 장거리 슛에서 시작된 민수의 농구부 도전 이야기입니다.',
  subtitleFr: "L'aventure de Minsu commence par un tir lointain réussi presque par hasard.",
  characters: [
    { id: 'minsu', name: 'Minsu', role: '15세 학생' },
    { id: 'maman', name: 'Maman', role: '민수의 엄마' },
    { id: 'eleve', name: 'Élève', role: '학교 친구' },
    { id: 'coach', name: 'Coach', role: '농구 코치' },
    { id: 'coequipier', name: 'Coéquipier', role: '농구부 동료' },
    { id: 'arbitre', name: 'Arbitre', role: '심판' },
  ],
  dialogue: [
      { speaker: "minsu", panel: 1, sceneImage: "/webtoon9/minsu-first-chance/scene-01.webp", fr: "Hein ? Je suis en retard !", ko: "어? 나 늦었어!", en: "What? I'm late!" },
      { speaker: "maman", panel: 2, sceneImage: "/webtoon9/minsu-first-chance/scene-02.webp", fr: "Minsu, passe une bonne journée !", ko: "민수야, 좋은 하루 보내!", en: "Minsu, have a good day!" },
      { speaker: "minsu", panel: 2, sceneImage: "/webtoon9/minsu-first-chance/scene-02.webp", fr: "Oui, maman ! Bon courage au travail !", ko: "네, 엄마! 오늘 일도 힘내세요!", en: "Yes, Mom! Good luck at work!" },
      { speaker: "eleve", panel: 3, sceneImage: "/webtoon9/minsu-first-chance/scene-03.webp", fr: "Hé ! Mon ballon !", ko: "야! 내 공!", en: "Hey! My ball!" },
      { speaker: "minsu", panel: 3, sceneImage: "/webtoon9/minsu-first-chance/scene-03.webp", fr: "Attrape !", ko: "받아!", en: "Catch!" },
      { speaker: "coach", panel: 3, sceneImage: "/webtoon9/minsu-first-chance/scene-03.webp", fr: "Tu as mis ce panier depuis si loin ? Tu joues au basket ?", ko: "그렇게 먼 데서 넣은 거야? 농구하니?", en: "You made that basket from so far away? Do you play basketball?" },
      { speaker: "coach", panel: 3, sceneImage: "/webtoon9/minsu-first-chance/scene-03.webp", fr: "Viens me voir après les cours.", ko: "수업 끝나고 나를 찾아와.", en: "Come see me after class." },

      { speaker: "eleve", panel: 4, sceneImage: "/webtoon9/minsu-first-chance/scene-04.webp", fr: "C'était incroyable…", ko: "정말 대단했어…", en: "That was incredible…" },
      { speaker: "eleve", panel: 4, sceneImage: "/webtoon9/minsu-first-chance/scene-04.webp", fr: "Il a marqué de si loin !", ko: "그렇게 먼 곳에서 넣었어!", en: "He scored from so far away!" },
      { speaker: "coach", panel: 4, sceneImage: "/webtoon9/minsu-first-chance/scene-04.webp", fr: "Minsu, viens me voir après les cours.", ko: "민수야, 수업 끝나고 나를 찾아와.", en: "Minsu, come see me after class." },
      { speaker: "minsu", panel: 4, sceneImage: "/webtoon9/minsu-first-chance/scene-04.webp", fr: "Moi… ?", ko: "저요…?", en: "Me…?" },

      { speaker: "coach", panel: 5, sceneImage: "/webtoon9/minsu-first-chance/scene-05.webp", fr: "Quel genre d'élève est Minsu ?", ko: "민수는 어떤 학생이니?", en: "What kind of student is Minsu?" },
      { speaker: "eleve", panel: 5, sceneImage: "/webtoon9/minsu-first-chance/scene-05.webp", fr: "Il est discret, mais il a un tir incroyable.", ko: "조용한 편인데 슛은 정말 대단해요.", en: "He's quiet, but he has an incredible shot." },
      { speaker: "eleve", panel: 5, sceneImage: "/webtoon9/minsu-first-chance/scene-05.webp", fr: "Oui, et il adore le basket.", ko: "네, 그리고 농구를 정말 좋아해요.", en: "Yes, and he loves basketball." },

      { speaker: "coequipier", panel: 6, sceneImage: "/webtoon9/minsu-first-chance/scene-06.webp", fr: "Lui ? Le nouveau ?", ko: "쟤가? 새로 온 애?", en: "Him? The new guy?" },
      { speaker: "coach", panel: 6, sceneImage: "/webtoon9/minsu-first-chance/scene-06.webp", fr: "Écoutez-moi bien. À partir d'aujourd'hui, Minsu rejoint l'équipe.", ko: "잘 들어. 오늘부터 민수가 팀에 합류한다.", en: "Listen carefully. Starting today, Minsu is joining the team." },
      { speaker: "coach", panel: 6, sceneImage: "/webtoon9/minsu-first-chance/scene-06.webp", fr: "Il jouera en attaque.", ko: "공격에서 뛰게 될 거야.", en: "He'll play on offense." },
      { speaker: "coequipier", panel: 6, sceneImage: "/webtoon9/minsu-first-chance/scene-06.webp", fr: "C'est le garçon du tir de tout à l'heure.", ko: "아까 그 슛을 넣은 애잖아.", en: "That's the boy who made that shot earlier." },
      { speaker: "minsu", panel: 6, sceneImage: "/webtoon9/minsu-first-chance/scene-06.webp", fr: "Je ferai de mon mieux.", ko: "최선을 다하겠습니다.", en: "I'll do my best." },

      { speaker: "minsu", panel: 7, sceneImage: "/webtoon9/minsu-first-chance/scene-07.webp", fr: "Coach… comment s'appelle l'équipe ?", ko: "코치님… 팀 이름이 뭐예요?", en: "Coach… what's the team called?" },
      { speaker: "coach", panel: 7, sceneImage: "/webtoon9/minsu-first-chance/scene-07.webp", fr: "Nous sommes les Red Basket.", ko: "우리는 Red Basket이야.", en: "We're the Red Basket." },
      { speaker: "coach", panel: 7, sceneImage: "/webtoon9/minsu-first-chance/scene-07.webp", fr: "Bienvenue parmi nous, Minsu !", ko: "우리 팀에 온 걸 환영한다, 민수!", en: "Welcome to the team, Minsu!" },

      { speaker: "minsu", panel: 8, sceneImage: "/webtoon9/minsu-first-chance/scene-08.webp", fr: "Maman, aujourd'hui, le coach m'a intégré à l'équipe.", ko: "엄마, 오늘 코치님이 저를 팀에 넣어 주셨어요.", en: "Mom, today the coach added me to the team." },
      { speaker: "maman", panel: 8, sceneImage: "/webtoon9/minsu-first-chance/scene-08.webp", fr: "Vraiment ? C'est une merveilleuse nouvelle !", ko: "정말? 정말 좋은 소식이네!", en: "Really? That's wonderful news!" },
      { speaker: "maman", panel: 8, sceneImage: "/webtoon9/minsu-first-chance/scene-08.webp", fr: "Je suis très fière de toi.", ko: "정말 네가 자랑스러워.", en: "I'm very proud of you." },
      { speaker: "minsu", panel: 8, sceneImage: "/webtoon9/minsu-first-chance/scene-08.webp", fr: "Je suis un peu nerveux… mais heureux.", ko: "조금 긴장되지만… 기뻐요.", en: "I'm a little nervous… but happy." },

      { speaker: "coach", panel: 9, sceneImage: "/webtoon9/minsu-first-chance/scene-09.webp", fr: "Ce week-end, nous avons un tournoi.", ko: "이번 주말에 토너먼트가 있다.", en: "This weekend, we have a tournament." },
      { speaker: "coach", panel: 9, sceneImage: "/webtoon9/minsu-first-chance/scene-09.webp", fr: "Voici notre plan de jeu.", ko: "이게 우리 경기 전략이다.", en: "Here's our game plan." },
      { speaker: "coach", panel: 9, sceneImage: "/webtoon9/minsu-first-chance/scene-09.webp", fr: "Minsu, prépare-toi bien.", ko: "민수야, 잘 준비해.", en: "Minsu, prepare well." },
      { speaker: "minsu", panel: 9, sceneImage: "/webtoon9/minsu-first-chance/scene-09.webp", fr: "Oui, coach !", ko: "네, 코치님!", en: "Yes, Coach!" },

      { speaker: "coach", panel: 10, sceneImage: "/webtoon9/minsu-first-chance/scene-10.webp", fr: "Aujourd'hui, donne tout.", ko: "오늘은 모든 걸 쏟아부어.", en: "Give it everything today." },
      { speaker: "coach", panel: 10, sceneImage: "/webtoon9/minsu-first-chance/scene-10.webp", fr: "Minsu, tu seras notre atout.", ko: "민수야, 네가 우리의 강점이 될 거야.", en: "Minsu, you'll be our trump card." },
      { speaker: "minsu", panel: 10, sceneImage: "/webtoon9/minsu-first-chance/scene-10.webp", fr: "Oui, coach !", ko: "네, 코치님!", en: "Yes, Coach!" },

      { speaker: "coequipier", panel: 11, sceneImage: "/webtoon9/minsu-first-chance/scene-11.webp", fr: "Coach, l'équipe adverse a l'air redoutable…", ko: "코치님, 상대 팀이 정말 강해 보여요…", en: "Coach, the opposing team looks formidable…" },
      { speaker: "coach", panel: 11, sceneImage: "/webtoon9/minsu-first-chance/scene-11.webp", fr: "Ce sont les Bulls.", ko: "저 팀은 Bulls다.", en: "They're the Bulls." },
      { speaker: "coequipier", panel: 11, sceneImage: "/webtoon9/minsu-first-chance/scene-11.webp", fr: "Ils sont grands…", ko: "다들 키가 커요…", en: "They're tall…" },
      { speaker: "coach", panel: 11, sceneImage: "/webtoon9/minsu-first-chance/scene-11.webp", fr: "Ne vous laissez pas impressionner.", ko: "기죽지 마라.", en: "Don't let them intimidate you." },

      { speaker: "coach", panel: 12, sceneImage: "/webtoon9/minsu-first-chance/scene-12.webp", fr: "Minsu, tu es notre carte maîtresse.", ko: "민수야, 네가 우리의 비장의 카드다.", en: "Minsu, you're our ace in the hole." },
      { speaker: "coach", panel: 12, sceneImage: "/webtoon9/minsu-first-chance/scene-12.webp", fr: "Attends le bon moment, puis attaque.", ko: "좋은 순간을 기다렸다가 공격해.", en: "Wait for the right moment, then attack." },
      { speaker: "arbitre", panel: 12, sceneImage: "/webtoon9/minsu-first-chance/scene-12.webp", fr: "Les équipes, en place !", ko: "양 팀, 자리로!", en: "Teams, take your positions!" },
      { speaker: "minsu", panel: 12, sceneImage: "/webtoon9/minsu-first-chance/scene-12.webp", fr: "Je suis prêt.", ko: "준비됐어요.", en: "I'm ready." }
  ] as MinsuLine[],
}