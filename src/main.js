// Импорт стилей (SCSS, собранный только из нужных модулей)
import './styles.scss';

// Импорт только нужного JS-компонента Bootstrap (Modal)
import { Modal } from 'bootstrap';

// Импорт Luxon
import { DateTime } from 'luxon';

// Запуск обновления времени
setInterval(() => {
  const hh = document.getElementById('hh');
  if (hh) {
    hh.textContent = DateTime
      .local()
      .setLocale('ru')
      .toFormat('dd.LL.yyyy HH:mm:ss');
  }
}, 1000);