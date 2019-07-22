import { List } from 'immutable';

export default {
  app: {
    profile: {
      uid: '102',
      access: '3',
      type: '3',
      contractor_id: '16',
      contractor_code: '123',
      contractor_name: 'Бизнес-тренд',
      first_name: 'Корвет',
      last_name: 'Корвет',
      middle_name: '',
      full_name: 'Корвет Корвет',
      email: 'korvet@gazprom.tech',
      phone: '7 (123) 123-45-67',
      phone_raw: '71231234567',
      password: 'b3518e496677c3c10eabd8c18de98ca4',
      password_salt: '3964a8db',
      blocked: '0'
    }
  },
  login: {
    isFetch: false,
    login: null
  },
  checks: {
    isFetch: false,
    list: [
      {
        check_id: '371',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '24',
        product_id: '55',
        product_number: '115',
        product_position: '2',
        product_title: 'Арматура АФ6-80/65х21 178(140) К2',
        date_stage_start: '1557446400',
        date_stage_end: '1558656000',
        date_actual_start: '1558438620',
        date_actual_end: '1559648220',
        date_cargo: '1564531200',
        date_last_check: '1558353454',
        note: '',
        progress: '20',
        complite: false,
        operations: [
          {
            operation_id: '491',
            group: 'Входной контроль материалов и комплектующих',
            template_operation_id: '10',
            template_group_id: '6',
            template_id: '41',
            title: 'Входной контроль метизов (гайки, болты, шпиндели и т.п.)',
            method: [
              {
                id: '204',
                title:
                    'I (наблюдение за ходом выполнения технологической или контрольной операции) / B (выборочно)',
                num: 1,
              },
              {
                id: '375',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 2,
              },
            ],
            docs:
                'РП 08620564.405-99\nГОСТ 24297-2013,\nНормативная документация производителя.\nГОСТ 28919\n209АФ.00.000 ТУ 160КК.00.000 ТУ\nГОСТ 9.301',
            discrepancy: false,
            features: [
              {
                feature_id: '1859',
                title: 'Сертификат качества',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1860',
                title: 'Внешний вид, поверхностные дефекты',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1861',
                title: 'Маркировка',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1862',
                title: 'Геометрические размеры',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1863',
                title:
                    'Химический состав и механические свойства (по сертификатам, по протоколам лаборатории)',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1864',
                title: 'Наличие антикоррозионного покрытия (цинк + хроматирование)',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Соответствие сведений сертификата нормативным требованиям на изготавливаемую продукцию',
              },
              {
                title:
                    'Соответствие контролируемых параметров сведениям сертификата и нормативной документации',
              },
            ],
          },
          {
            operation_id: '492',
            group: 'Входной контроль материалов и комплектующих',
            template_operation_id: '9',
            template_group_id: '6',
            template_id: '41',
            title: 'Входной контроль отливок и полуфабрикатов',
            method: [
              {
                id: '371',
                title:
                    'I (наблюдение за ходом выполнения технологической или контрольной операции) / A (только первую партию, затем выборочно)',
                num: 1,
              },
              {
                id: '372',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 2,
              },
            ],
            docs:
                'РП 08620564.405-99\nГОСТ 24297-2013,\nНормативная документация производителя.\n209АФ.00.000 ТУ\n160КК.00.000 ТУ',
            discrepancy: false,
            features: [
              {
                feature_id: '1865',
                title:
                    'Оригинал сертификата (паспорта) качества, выданного предприятием-изготовителем или дубликат сертификата (паспорта) качества заверенного предприятием-изготовителем',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1866',
                title:
                    'Химический состав и механические свойства. Эквивалент углерода. Класс прочности. Марка стали',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1867',
                title: 'Номер плавки, номер партии',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1868',
                title: 'Маркировка',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1869',
                title:
                    'Внешний вид. Отсутствие недопустимых дефектов на поверхности металлопроката',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1870',
                title: 'Геометрические размеры изделий',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Соответствие сведений сертификата нормативным требованиям на изготавливаемую продукцию',
              },
              {
                title:
                    'Соответствие требованиям нормативной и технической документации изготовителя',
              },
              {
                title:
                    'Соответствие контролируемых параметров сведениям сертификата и нормативной документации',
              },
              {
                title: 'Наличие и соответствие маркировки нормативной документации',
              },
            ],
          },
          {
            operation_id: '493',
            group: 'Входной контроль материалов и комплектующих',
            template_operation_id: '8',
            template_group_id: '6',
            template_id: '41',
            title: 'Входной контроль металлопроката',
            method: [
              {
                id: '367',
                title:
                    'I (наблюдение за ходом выполнения технологической или контрольной операции) / A (только первую партию, затем выборочно)',
                num: 1,
              },
              {
                id: '368',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 2,
              },
            ],
            docs: 'РП 08620564.405-99,\nГОСТ 24297-2013,\nНормативная документация производителя',
            discrepancy: false,
            features: [
              {
                feature_id: '1871',
                title:
                    'Оригинал сертификата (паспорта) качества, выданного предприятием-изготовителем или дубликат сертификата (паспорта) качества заверенного предприятием-изготовителем',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1872',
                title:
                    'Химический состав и механические свойства. Эквивалент углерода. Класс прочности. Марка стали',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1873',
                title: 'Номер плавки, номер партии',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1874',
                title: 'Маркировка',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1875',
                title:
                    'Внешний вид. Отсутствие недопустимых дефектов на поверхности металлопроката',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1876',
                title: 'Геометрические размеры изделий',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Соответствие сведений сертификата нормативным требованиям на изготавливаемую продукцию',
              },
              {
                title:
                    'Соответствие контролируемых параметров сведениям сертификата и нормативной документации',
              },
            ],
          },
          {
            operation_id: '494',
            group: 'Определение химического состава и механических свойств стали сборочных единиц',
            template_operation_id: '12',
            template_group_id: '7',
            template_id: '41',
            title: 'Определение механических свойств',
            method: [
              {
                id: '382',
                title:
                    'I (наблюдение за ходом выполнения технологической или контрольной операции) / B (выборочно)',
                num: 1,
              },
              {
                id: '383',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 2,
              },
            ],
            docs:
                '1.Технические условия или другой нормативный документ на объект контроля.\n2.Сертификат качества объекта контроля.\n3.Процесс испытаний соответствует методике испытаний.\n4.Методика испытаний механических свойств.\n5-6. Согласно КД',
            discrepancy: false,
            features: [
              {
                feature_id: '1877',
                title: 'Отбор темплетов',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1878',
                title: 'Изготовление образцов',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1879',
                title: 'Испытательное оборудование',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1880',
                title: 'Процесс испытаний',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1881',
                title: 'Механические свойства',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1882',
                title: 'Твердость',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Отбор темплетов, их маркировка и т.п. выполнены в соответствии с установленными требованиями',
              },
              {
                title:
                    'Испытательное оборудование соответствует проводимым испытаниям, исправно, аттестовано',
              },
              {
                title:
                    'Механические свойства изделия соответствуют требованиям нормативной документации',
              },
            ],
          },
          {
            operation_id: '495',
            group: 'Определение химического состава и механических свойств стали сборочных единиц',
            template_operation_id: '11',
            template_group_id: '7',
            template_id: '41',
            title: 'Определение химического состава в лабораторных условиях',
            method: [
              {
                id: '378',
                title:
                    'I (наблюдение за ходом выполнения технологической или контрольной операции) / B (выборочно)',
                num: 1,
              },
              {
                id: '379',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 2,
              },
            ],
            docs:
                '1. Технические условия или другой нормативный документ на объект контроля.\n2. Сертификат качества объекта контроля.',
            discrepancy: false,
            features: [
              {
                feature_id: '1883',
                title: 'Химические элементы и их процентное содержание в объекте исследования',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Соответствие химических элементов, их процентного содержания требованиям нормативного документа',
              },
            ],
          },
          {
            operation_id: '496',
            group: 'Приемо-сдаточные испытания задвижек, входящих в состав изделий',
            template_operation_id: '21',
            template_group_id: '9',
            template_id: '41',
            title: 'Контроль промывки и продувки продукции после испытаний',
            method: [
              {
                id: '466',
                title:
                    'V (проведение проверки или проверка выполнения технологического процесса) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний',
            discrepancy: false,
            features: [
              {
                feature_id: '1884',
                title: 'Состояние изделия',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Изделие промыто и продуто, отсутствие следов испытательной жидкости, загрязнений и т.п.',
              },
            ],
          },
          {
            operation_id: '497',
            group: 'Приемо-сдаточные испытания задвижек, входящих в состав изделий',
            template_operation_id: '20',
            template_group_id: '9',
            template_id: '41',
            title: 'Испытания на герметичность задвижки',
            method: [
              {
                id: '465',
                title:
                    'W (проверка и испытания проводятся только в присутствии инспектора) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний',
            discrepancy: false,
            features: [
              {
                feature_id: '1885',
                title: 'Положение элементов заглушки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1886',
                title: 'Порядок испытаний',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1887',
                title: 'Испытательное давление, время выдержки, испытательная среда',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1888',
                title: 'Протечки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title: 'Соблюдение порядка испытаний',
              },
              {
                title:
                    'Испытательное давление и время выдержки испытательная среда соответствуют требованиям нормативного документа и программе испытаний',
              },
              {
                title:
                    'Изделия считают выдержавшими испытания, если утечка в затворе соответствуют нормам герметичности',
              },
            ],
          },
          {
            operation_id: '498',
            group: 'Приемо-сдаточные испытания задвижек, входящих в состав изделий',
            template_operation_id: '19',
            template_group_id: '9',
            template_id: '41',
            title: 'Испытание на герметичность сальникового уплотнения задвижки',
            method: [
              {
                id: '464',
                title:
                    'W (проверка и испытания проводятся только в присутствии инспектора) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний',
            discrepancy: false,
            features: [
              {
                feature_id: '1889',
                title: 'Положение элементов заглушки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1890',
                title: 'Порядок испытаний',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1891',
                title: 'Циклы «открыто-закрыто» при PN',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1892',
                title: 'Испытательное давление, время выдержки, испытательная среда',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1893',
                title: 'Протечки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Вода, подаются в один из патрубков при заглушенном другом патрубке и открытом затворе',
              },
              {
                title: 'Соблюдение порядка испытаний',
              },
              {
                title: 'Трёхкратное подъем и опускания запирающего элемента на открытие и закрытие',
              },
              {
                title:
                    'Испытательное давление, время выдержки, испытательная среда соответствуют требованиям нормативного документа и заказной документации',
              },
              {
                title: 'Протечки не допускаются',
              },
            ],
          },
          {
            operation_id: '499',
            group: 'Приемо-сдаточные испытания задвижек, входящих в состав изделий',
            template_operation_id: '18',
            template_group_id: '9',
            template_id: '41',
            title: 'Испытание на прочность, плотность корпуса задвижки',
            method: [
              {
                id: '463',
                title:
                    'W (проверка и испытания проводятся только в присутствии инспектора) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний изделия 127ЗМ.000 ПМ',
            discrepancy: false,
            features: [
              {
                feature_id: '1894',
                title: 'Положение элементов заглушки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1895',
                title: 'Порядок испытаний',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1896',
                title:
                    'Течи через корпус и крышку, сварные швы, деформация, запотевания корпуса задвижки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1897',
                title: 'Испытательное давление, время выдержки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1898',
                title: 'Испытательная среда',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Вода, подаются в один из патрубков при заглушенном другом патрубке и открытом затворе',
              },
              {
                title: 'Соблюдение порядка испытаний',
              },
              {
                title: 'Течь отсутствует. Отсутствует деформация и запотевание деталей',
              },
              {
                title:
                    'Течь отсутствует. Отсутствует деформация и запотевание деталей и сварных швов',
              },
              {
                title:
                    'Испытательное давление, время выдержки, испытательная среда соответствуют требованиям нормативного документа и заказной документации',
              },
              {
                title:
                    'Испытательное давление и время выдержки испытательная среда соответствуют требованиям нормативного документа и программе испытаний',
              },
            ],
          },
          {
            operation_id: '500',
            group: 'Изготовление продукции',
            template_operation_id: '13',
            template_group_id: '8',
            template_id: '41',
            title: 'Изготовление и контроль резьб',
            method: [
              {
                id: '385',
                title:
                    'I (наблюдение за ходом выполнения технологической или контрольной операции) / B (выборочно)',
                num: 1,
              },
            ],
            docs:
                'ГОСТ 16093,\nГОСТ 9562, ГОСТ 6111, ГОСТ 6211,  ГОСТ 633, ГОСТ632, ГОСТ 33758-2016\nКД и ТП на деталь',
            discrepancy: false,
            features: [
              {
                feature_id: '1899',
                title: 'Высота профиля',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1900',
                title: 'Углы профиля',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1901',
                title:
                    'Качество поверхности резьбы: - Отсутствие раванин, заусенцев сколов , сдиров - Отсутствие следов вибрации резьбообразующего инструмента (дробление)',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1902',
                title: 'Шероховатоость поверхности резьбы',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1903',
                title: 'Длина резьбы',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1904',
                title: 'Шаг резьбы',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1905',
                title: 'Конусность резьбы',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1906',
                title: 'Натяг по резьбовому калибру',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1907',
                title: 'Натяг по гладкому калибру',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1908',
                title: 'Минимальная толщина стенки под резьбой',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1909',
                title: 'Входной контроль резьбонарезного инструмента',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Резьбы соответствует требованиям ГОСТ 16093, ГОСТ 9562, ГОСТ 6111, ГОСТ 6211,  ГОСТ 633, ГОСТ632, ГОСТ 33758-2016',
              },
            ],
          },
          {
            operation_id: '501',
            group: 'Приемо-сдаточные испытания готовых изделий',
            template_operation_id: '25',
            template_group_id: '10',
            template_id: '41',
            title:
                'Контроль промывки и продувки продукции после испытаний Контроль полнопроходности ствола елки',
            method: [
              {
                id: '470',
                title:
                    'V (проведение проверки или проверка выполнения технологического процесса) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний',
            discrepancy: false,
            features: [
              {
                feature_id: '1910',
                title: 'Состояние изделия',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Изделие промыто и продуто, отсутствие следов испытательной жидкости, загрязнений и т.п.',
              },
              {
                title: 'Полнопроходность согласно КД обеспечена',
              },
            ],
          },
          {
            operation_id: '502',
            group: 'Приемо-сдаточные испытания готовых изделий',
            template_operation_id: '24',
            template_group_id: '10',
            template_id: '41',
            title:
                'Испытания на герметичность кабельных вводов (периодические испытания согласно КД)',
            method: [
              {
                id: '469',
                title:
                    'W (проверка и испытания проводятся только в присутствии инспектора) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний',
            discrepancy: false,
            features: [
              {
                feature_id: '1911',
                title: 'Порядок испытаний',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1912',
                title: 'Испытательное давление, время выдержки, испытательная среда',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1913',
                title: 'Протечки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title: 'Соблюдение порядка испытаний',
              },
              {
                title:
                    'Испытательное давление и время выдержки испытательная среда соответствуют требованиям нормативного документа и программе испытаний',
              },
              {
                title:
                    'Изделия считают выдержавшими испытания, если утечка соответствуют нормам герметичности',
              },
            ],
          },
          {
            operation_id: '503',
            group: 'Приемо-сдаточные испытания готовых изделий',
            template_operation_id: '23',
            template_group_id: '10',
            template_id: '41',
            title: 'Испытания на герметичность соединений',
            method: [
              {
                id: '409',
                title:
                    'I (наблюдение за ходом выполнения технологической или контрольной операции) / C (100% проверка каждой единицы)',
                num: 1,
              },
              {
                id: '410',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 2,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний',
            discrepancy: false,
            features: [
              {
                feature_id: '1914',
                title: 'Положение элементов заглушки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1915',
                title: 'Порядок испытаний',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1916',
                title: 'Испытательное давление, время выдержки, испытательная среда',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1917',
                title: 'Протечки',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title: 'Соблюдение порядка испытаний',
              },
              {
                title:
                    'Испытательное давление и время выдержки испытательная среда соответствуют требованиям нормативного документа и программе испытаний',
              },
              {
                title:
                    'Изделия считают выдержавшими испытания, если утечка соответствуют нормам герметичности',
              },
            ],
          },
          {
            operation_id: '504',
            group: 'Приемо-сдаточные испытания готовых изделий',
            template_operation_id: '22',
            template_group_id: '10',
            template_id: '41',
            title: 'Испытание на прочность, плотность корпуса',
            method: [
              {
                id: '467',
                title:
                    'W (проверка и испытания проводятся только в присутствии инспектора) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: 'Программа-методика проведения приемо-сдаточных испытаний',
            discrepancy: false,
            features: [
              {
                feature_id: '1918',
                title: 'Положение элементов заглушки',
                date_last_check: '1558353454',
                status: '1',
                photos: List(),
              },
              {
                feature_id: '1919',
                title: 'Порядок испытаний',
                date_last_check: '1558353454',
                status: '2',
                photos: List(),
              },
              {
                feature_id: '1920',
                title: 'Течи через корпус,  деформация, запотевания корпуса',
                date_last_check: '1558353454',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '1921',
                title: 'Испытательное давление, время выдержки',
                date_last_check: '1558353454',
                status: '2',
                photos: List(),
              },
              {
                feature_id: '1922',
                title: 'Испытательная среда',
                date_last_check: '1558353454',
                status: '1',
                photos: List(),
              },
            ],
            criterias: [
              {
                title:
                    'Вода, подаются в один из патрубков при заглушенном другом патрубке и открытом затворе',
              },
              {
                title: 'Соблюдение порядка испытаний',
              },
              {
                title: 'Течь отсутствует. Отсутствует деформация и запотевание деталей',
              },
              {
                title:
                    'Испытательное давление и время выдержки испытательная среда соответствуют требованиям нормативного документа и программе испытаний',
              },
            ],
          },
        ],
      },
      {
        check_id: '1765',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_50630_23962_20679',
        contract_annex: '36',
        product_id: '231',
        product_number: '',
        product_position: '5',
        product_title: 'Арматура АФК6Э-80х70 К1 ХЛ',
        date_stage_start: '1560643200',
        date_stage_end: '1561852800',
        date_actual_start: '1560643200',
        date_actual_end: '1561852800',
        date_cargo: '1567123200',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1771',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_50630_23962_20679',
        contract_annex: '36',
        product_id: '231',
        product_number: '',
        product_position: '6',
        product_title: 'Арматура АФК6Э-80х70 К1 ХЛ',
        date_stage_start: '1559174400',
        date_stage_end: '1560384000',
        date_actual_start: '1559174400',
        date_actual_end: '1560384000',
        date_cargo: '1567123200',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '16',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '121',
        product_number: '8808',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1554163200',
        date_stage_end: '1554595200',
        date_actual_start: '1554163200',
        date_actual_end: '1554595200',
        date_cargo: '1619913600',
        date_last_check: '1555576698',
        note: '',
        progress: '60',
        complite: false,
        operations: [],
      },
      {
        check_id: '24',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '122',
        product_number: '8809',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1554163200',
        date_stage_end: '1554595200',
        date_actual_start: '1554163200',
        date_actual_end: '1554595200',
        date_cargo: '1619913600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '32',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '123',
        product_number: '8810',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1554163200',
        date_stage_end: '1554595200',
        date_actual_start: '1554163200',
        date_actual_end: '1554595200',
        date_cargo: '1619913600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '201',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '124',
        product_number: '8816',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1556755200',
        date_stage_end: '1557187200',
        date_actual_start: '1556755200',
        date_actual_end: '1559260800',
        date_cargo: '1619913600',
        date_last_check: '1559283823',
        note: '',
        progress: '100',
        complite: false,
        operations: [],
      },
      {
        check_id: '209',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '125',
        product_number: '8817',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1558828800',
        date_stage_end: '1559260800',
        date_actual_start: '1558828800',
        date_actual_end: '1559260800',
        date_cargo: '1619913600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '217',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '126',
        product_number: '8818',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1558828800',
        date_stage_end: '1559260800',
        date_actual_start: '1558828800',
        date_actual_end: '1559260800',
        date_cargo: '1619913600',
        date_last_check: '1559284356',
        note: '',
        progress: '100',
        complite: false,
        operations: [],
      },
      {
        check_id: '225',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '128',
        product_number: '',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1556755200',
        date_stage_end: '1557187200',
        date_actual_start: '1556755200',
        date_actual_end: '1557187200',
        date_cargo: '1618617600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '241',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '129',
        product_number: '',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1556755200',
        date_stage_end: '1557187200',
        date_actual_start: '1556755200',
        date_actual_end: '1557187200',
        date_cargo: '1619913600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '257',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '130',
        product_number: '',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1559433600',
        date_stage_end: '1559865600',
        date_actual_start: '1559433600',
        date_actual_end: '1559865600',
        date_cargo: '1618617600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1738',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_22754',
        contract_annex: '11',
        product_id: '131',
        product_number: '',
        product_position: '1',
        product_title: 'Блок БГ-2 80 4',
        date_stage_start: '1559433600',
        date_stage_end: '1559865600',
        date_actual_start: '1559433600',
        date_actual_end: '1559865600',
        date_cargo: '1619913600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1998',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_59_23962_24909',
        contract_annex: '33',
        product_id: '39311',
        product_number: '',
        product_position: '1',
        product_title: 'Задвижка 30лс15нж 200-40 КОФ',
        date_stage_start: '1559779200',
        date_stage_end: '1560211200',
        date_actual_start: '1559779200',
        date_actual_end: '1560211200',
        date_cargo: '1561852800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1974',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_59_23962_24909',
        contract_annex: '33',
        product_id: '39311',
        product_number: '',
        product_position: '2',
        product_title: 'Задвижка 30лс15нж 200-40 КОФ',
        date_stage_start: '1559779200',
        date_stage_end: '1560211200',
        date_actual_start: '1559779200',
        date_actual_end: '1560211200',
        date_cargo: '1561852800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1982',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_59_23962_24909',
        contract_annex: '33',
        product_id: '39311',
        product_number: '',
        product_position: '3',
        product_title: 'Задвижка 30лс15нж 200-40 КОФ',
        date_stage_start: '1559779200',
        date_stage_end: '1560211200',
        date_actual_start: '1559779200',
        date_actual_end: '1560211200',
        date_cargo: '1561852800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1990',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_59_23962_24909',
        contract_annex: '33',
        product_id: '39311',
        product_number: '',
        product_position: '4',
        product_title: 'Задвижка 30лс15нж 200-40 КОФ',
        date_stage_start: '1559779200',
        date_stage_end: '1560211200',
        date_actual_start: '1559779200',
        date_actual_end: '1560211200',
        date_cargo: '1561852800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '2006',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_59_23962_24909',
        contract_annex: '33',
        product_id: '39311',
        product_number: '',
        product_position: '6',
        product_title: 'Задвижка 30лс15нж 200-40 КОФ',
        date_stage_start: '1559779200',
        date_stage_end: '1560211200',
        date_actual_start: '1559779200',
        date_actual_end: '1560211200',
        date_cargo: '1561852800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1747',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_23962_27487',
        contract_annex: '11',
        product_id: '70',
        product_number: '',
        product_position: '1',
        product_title: 'Задвижка 30лс15нж(НП) 200-40 КОФ',
        date_stage_start: '1558051200',
        date_stage_end: '1559260800',
        date_actual_start: '1558051200',
        date_actual_end: '1559260800',
        date_cargo: '1568505600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1838',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '38',
        product_id: '49',
        product_number: '',
        product_position: '1',
        product_title: 'Затвор 19лс11нж3 80-25 КОФ',
        date_stage_start: '1558915200',
        date_stage_end: '1559347200',
        date_actual_start: '1558915200',
        date_actual_end: '1559347200',
        date_cargo: '1561420800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1918',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '38',
        product_id: '50',
        product_number: '',
        product_position: '1',
        product_title: 'Затвор 19лс11нж3 80-25 КОФ',
        date_stage_start: '1558915200',
        date_stage_end: '1559347200',
        date_actual_start: '1558915200',
        date_actual_end: '1559347200',
        date_cargo: '1561420800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1846',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '38',
        product_id: '51',
        product_number: '',
        product_position: '1',
        product_title: 'Затвор 19лс11нж3 80-25 КОФ',
        date_stage_start: '1558915200',
        date_stage_end: '1559347200',
        date_actual_start: '1558915200',
        date_actual_end: '1559347200',
        date_cargo: '1561420800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1910',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '38',
        product_id: '52',
        product_number: '',
        product_position: '1',
        product_title: 'Затвор 19лс11нж3 80-25 КОФ',
        date_stage_start: '1558915200',
        date_stage_end: '1559347200',
        date_actual_start: '1558915200',
        date_actual_end: '1559347200',
        date_cargo: '1561420800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1854',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '38',
        product_id: '53',
        product_number: '',
        product_position: '1',
        product_title: 'Затвор 19лс11нж3 80-25 КОФ',
        date_stage_start: '1558915200',
        date_stage_end: '1559347200',
        date_actual_start: '1558915200',
        date_actual_end: '1559347200',
        date_cargo: '1561420800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1862',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '38',
        product_id: '54',
        product_number: '',
        product_position: '1',
        product_title: 'Затвор 19лс11нж3 80-25 КОФ',
        date_stage_start: '1558915200',
        date_stage_end: '1559347200',
        date_actual_start: '1558915200',
        date_actual_end: '1559347200',
        date_cargo: '1561420800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '1902',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '38',
        product_id: '57',
        product_number: '',
        product_position: '1',
        product_title: 'Затвор 19лс11нж3 80-25 КОФ',
        date_stage_start: '1558915200',
        date_stage_end: '1559347200',
        date_actual_start: '1558915200',
        date_actual_end: '1559347200',
        date_cargo: '1561420800',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '138',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_73273_23962_23651',
        contract_annex: '24',
        product_id: '56',
        product_number: '',
        product_position: '3',
        product_title: 'Обвязка ОКК2-21-178х245х324 ХЛ-К2',
        date_stage_start: '1558656000',
        date_stage_end: '1558915200',
        date_actual_start: '1558931520',
        date_actual_end: '1558915200',
        date_cargo: '1564531200',
        date_last_check: '1558942050',
        note: '',
        progress: '80',
        complite: false,
        operations: [],
      },
      {
        check_id: '1717',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_67942_23962_36706',
        contract_annex: '1',
        product_id: '36135',
        product_number: '123213123',
        product_position: '1',
        product_title: 'Оборудование 6A3G.CHM-350*70.10',
        date_stage_start: '1557100800',
        date_stage_end: '1558224000',
        date_actual_start: '1557100800',
        date_actual_end: '1558224000',
        date_cargo: '1577750400',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [
          {
            operation_id: '4855',
            group: 'Контроль разрешительной и конструкторской документации',
            template_operation_id: '128',
            template_group_id: '47',
            template_id: '41',
            title: 'Подтверждение соответствия продукции требованиям ФЗ/ТР ТС',
            method: [
              {
                id: '360',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: '',
            discrepancy: false,
            features: [
              {
                feature_id: '19525',
                title: 'Сертификат соответствия',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title: 'Срок действия',
              },
              {
                title: 'Сертификат распространяется на изготавливаемую продукцию',
              },
            ],
          },
          {
            operation_id: '4856',
            group: 'Контроль разрешительной и конструкторской документации',
            template_operation_id: '129',
            template_group_id: '47',
            template_id: '41',
            title: 'Типовые и периодические испытания',
            method: [
              {
                id: '362',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: '',
            discrepancy: false,
            features: [
              {
                feature_id: '19526',
                title: 'Наличие протоколов/актов испытаний/измерений',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
              {
                feature_id: '19527',
                title: 'Наличие актов/протоколов проверки параметров резьбовых соединений',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title: 'Соответствие требованиям нормативной и технической документации',
              },
            ],
          },
          {
            operation_id: '4857',
            group: 'Контроль разрешительной и конструкторской документации',
            template_operation_id: '130',
            template_group_id: '47',
            template_id: '41',
            title: 'Проверка конструкторской документации',
            method: [
              {
                id: '364',
                title: 'R (проведение проверки документации) / C (100% проверка каждой единицы)',
                num: 1,
              },
            ],
            docs: '',
            discrepancy: false,
            features: [
              {
                feature_id: '19528',
                title: 'Проверка документации',
                date_last_check: '0',
                status: '0',
                photos: List(),
              },
            ],
            criterias: [
              {
                title: 'Соответствие требованиям НТД и спецификации',
              },
            ],
          },
        ],
      },
      {
        check_id: '76',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_50630_11926_33459',
        contract_annex: '4',
        product_id: '246',
        product_number: '',
        product_position: '1',
        product_title: 'Установка Мера-ММ-40-10-400',
        date_stage_start: '1552953600',
        date_stage_end: '1553385600',
        date_actual_start: '1552953600',
        date_actual_end: '1553385600',
        date_cargo: '1555286400',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '40',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_35551',
        contract_annex: '2',
        product_id: '82',
        product_number: '8920',
        product_position: '1',
        product_title: 'Установка МЕРА–ММ.711-1-40-12-400/1-4000',
        date_stage_start: '1553990400',
        date_stage_end: '1554422400',
        date_actual_start: '1553990400',
        date_actual_end: '1554422400',
        date_cargo: '1567641600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '48',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_35551',
        contract_annex: '2',
        product_id: '87',
        product_number: '8921',
        product_position: '1',
        product_title: 'Установка МЕРА–ММ.711-1-40-12-400/1-4000',
        date_stage_start: '1554336000',
        date_stage_end: '1554768000',
        date_actual_start: '1554336000',
        date_actual_end: '1554768000',
        date_cargo: '1573257600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '56',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_35551',
        contract_annex: '2',
        product_id: '90',
        product_number: '8929',
        product_position: '1',
        product_title: 'Установка МЕРА–ММ.711-1-40-12-400/1-4000',
        date_stage_start: '1554076800',
        date_stage_end: '1554508800',
        date_actual_start: '1554076800',
        date_actual_end: '1554508800',
        date_cargo: '1573257600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '4615',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_35551',
        contract_annex: '3',
        product_id: '71',
        product_number: '8922',
        product_position: '1',
        product_title: 'Установка МЕРА–ММ.711-1-40-12-400/1-4000',
        date_stage_start: '1562025600',
        date_stage_end: '1562457600',
        date_actual_start: '1562025600',
        date_actual_end: '1562457600',
        date_cargo: '1573257600',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
      {
        check_id: '279',
        stage_title: 'Разработка РКД для изготовления',
        contract_code: 'ДП_27605_11926_35551',
        contract_annex: '3',
        product_id: '72',
        product_number: '8923',
        product_position: '1',
        product_title: 'Установка МЕРА–ММ.711-1-40-12-400/1-4000',
        date_stage_start: '1564012800',
        date_stage_end: '1564444800',
        date_actual_start: '1564012800',
        date_actual_end: '1564444800',
        date_cargo: '1567728000',
        date_last_check: '0',
        note: '',
        progress: '0',
        complite: false,
        operations: [],
      },
    ],
    stages: [
      {
        stage_id: '123',
        code: '001',
        title: 'Разработка РКД для изготовления',
      },
      {
        stage_id: '125',
        code: '003',
        title: 'Технологическая сборка',
      },
      {
        stage_id: '126',
        code: '',
        title: 'Предъявление ОТК',
      },
      {
        stage_id: '127',
        code: '004',
        title: 'Приемка ОТК, готовность изделия к отгрузке',
      },
      {
        stage_id: '129',
        code: '008',
        title: 'Отгрузка',
      },
      {
        stage_id: '130',
        code: '002',
        title: 'Поставка комплектующих',
      },
      {
        stage_id: '142',
        code: '005',
        title: 'Приемо-сдаточные испытания',
      },
      {
        stage_id: '143',
        code: '006',
        title: 'Покраска',
      },
      {
        stage_id: '144',
        code: '007',
        title: 'Упаковка и комплектация',
      },
      {
        stage_id: '175',
        code: '010',
        title: 'Покраска и сборка электрики',
      },
      {
        stage_id: '176',
        code: '011',
        title: 'Окончательная приёмка и упаковка',
      },
      {
        stage_id: '178',
        code: '012',
        title: 'Старт работ',
      },
      {
        stage_id: '217',
        code: '013',
        title: 'Входной контроль узлов и компонентов',
      },
      {
        stage_id: '218',
        code: '014',
        title: 'Механическая обработка',
      },
      {
        stage_id: '219',
        code: '015',
        title: 'Упаковка, комплектация, паспорт',
      },
      {
        stage_id: '220',
        code: '101',
        title: 'Наличие материалов и комплектующих',
      },
      {
        stage_id: '221',
        code: '102',
        title: 'Определение химического состава и механических свойств стали сборочных единиц',
      },
      {
        stage_id: '222',
        code: '103',
        title: 'Изготовление продукции',
      },
      {
        stage_id: '223',
        code: '105',
        title: 'Приемо-сдаточные испытания задвижек, входящих в состав изделий',
      },
      {
        stage_id: '224',
        code: '106',
        title: 'Приемо-сдаточные испытания готовых изделий',
      },
      {
        stage_id: '225',
        code: '107',
        title: 'Подготовка и нанесение наружного антикоррозионного покрытия',
      },
      {
        stage_id: '226',
        code: '108',
        title: 'Контроль заводской маркировки изделия',
      },
      {
        stage_id: '227',
        code: '109',
        title: 'Консервация',
      },
      {
        stage_id: '228',
        code: '110',
        title: 'Контроль упаковки изделий на защищённость и готовность к транспортировке',
      },
      {
        stage_id: '229',
        code: '111',
        title: 'Оформление паспорта',
      },
      {
        stage_id: '230',
        code: '112',
        title: 'Транспортная маркировка',
      },
      {
        stage_id: '231',
        code: '116',
        title: 'Контроль комплектности поставки',
      },
      {
        stage_id: '232',
        code: '117',
        title:
            'Отгрузка (погрузка и раскрепление груза) Оформление Разрешение на отгрузку/Уведомление об отгрузке',
      },
    ],
    features: {},
    search: "",
    isNetwork: false,
    drawOpen: false
  },
  check: {
    isFetch: false,
    check: null
  },
  product: {
    isFetch: false
  },
  knots: {
    knots: [
      {
        knot_id: "1",
        knot_group_id: "1",
        knot_number: "12345",
        knot_title: "Крестовина Мера",
        knot_count: 0,
        product_id: "257",
        product_title: "Установка Мера-ММ 40-10-800",
        position: "1",
        date_last_check: "1562321977",
        operations: [
          {
            operation_id: "1",
            group: "Входной контроль материалов и комплектующих",
            title: "Входной контроль металлопроката, отливок/поковок/заготовок",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "824",
                title: "V (проведение проверки или проверка выполнения технологического процесса)",
                num: 1
              },
              {
                id: "825",
                title: "R (проведение проверки документации) / C (100% проверка каждой единицы)",
                num: 2
              }
            ],
            features: [
              {
                feature_id: "1",
                title: "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                date_last_check: "1562321977",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие ГОСТ 24297-2013"
              }
            ]
          },
          {
            operation_id: "2",
            group: "Входной контроль материалов и комплектующих",
            title: "Входной контроль расходных материалов (ЛКМ/АКП и тд.)",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "828",
                title: "R (проведение проверки документации) / A (только первую партию, затем выборочно)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "2",
                title: "1. Сертификаты качества на антикоррозионное покрытие, срок годности. 2. Состояние тары, наличие этикеток на таре, маркировка, наличие манипуляционных знаков, состояние упаковки, условия хранения.",
                date_last_check: "1560973901",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие сведений сертификата нормативным требованиям на изготавливаемую продукцию"
              }
            ]
          },
          {
            operation_id: "3",
            group: "Входной контроль материалов и комплектующих",
            title: "Входной контроль комплектующих изделий (приборы КИПиА, средств измерений, автоматики и др.)",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "830",
                title: "V (проведение проверки или проверка выполнения технологического процесса) / A (только первую партию, затем выборочно)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "3",
                title: "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                date_last_check: "1560973960",
                status: "0"
              },
              {
                feature_id: "4",
                title: "Комплектность документов (паспорт, руководство по эксплуатации, копии разрешительной документации)",
                date_last_check: "1560973960",
                status: "0"
              },
              {
                feature_id: "5",
                title: "Срок поверки",
                date_last_check: "1560973960",
                status: "0"
              },
              {
                feature_id: "6",
                title: "Наличие клейм и пломб",
                date_last_check: "1560973960",
                status: "0"
              },
              {
                feature_id: "7",
                title: "Работоспособность оборудования, средств измерений, контроля, автоматики и автоматизации",
                date_last_check: "1560973960",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие требованиям ссылочной документации"
              }
            ]
          },
          {
            operation_id: "4",
            group: "Определение химического состава и механических свойств стали сборочных единиц",
            title: "Химические элементы и их процентное содержание в объекте исследования",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "842",
                title: "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "8",
                title: "1. Технические условия или другой нормативный документ на объект контроля. 2. Сертификат качества объекта контроля. 3. Химические элементы в объекте исследования и их процентное содержание.",
                date_last_check: "0",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие химических элементов, их процентного содержания требованиям нормативного документа"
              }
            ]
          },
          {
            operation_id: "5",
            group: "Определение химического состава и механических свойств стали сборочных единиц",
            title: "Определение механических свойств",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "843",
                title: "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "9",
                title: "Отбор темплетов",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "10",
                title: "Изготовление образцов",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "11",
                title: "Испытательное оборудование",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "12",
                title: "Процесс испытаний",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "13",
                title: "Механические свойства",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "14",
                title: "Твердость",
                date_last_check: "0",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Отбор темплетов, их маркировка и т.п. выполнены в соответствии с установленными требованиями"
              },
              {
                title: "Испытательное оборудование соответствует проводимым испытаниям, исправно, аттестовано"
              },
              {
                title: "Механические свойства изделия соответствуют требованиям нормативной документации"
              }
            ]
          }
        ]
      },
      {
        knot_id: "4",
        knot_group_id: "3",
        knot_number: "123",
        knot_title: "Соединение Мера",
        knot_count: 0,
        product_id: "257",
        product_title: "Установка Мера-ММ 40-10-800",
        position: "0",
        date_last_check: "0",
        operations: [
          {
            operation_id: "16",
            group: "Входной контроль материалов и комплектующих",
            title: "Входной контроль металлопроката, отливок/поковок/заготовок",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "824",
                title: "V (проведение проверки или проверка выполнения технологического процесса)",
                num: 1
              },
              {
                id: "825",
                title: "R (проведение проверки документации) / C (100% проверка каждой единицы)",
                num: 2
              }
            ],
            features: [
              {
                feature_id: "43",
                title: "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                date_last_check: "0",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие ГОСТ 24297-2013"
              }
            ]
          },
          {
            operation_id: "17",
            group: "Входной контроль материалов и комплектующих",
            title: "Входной контроль расходных материалов (ЛКМ/АКП и тд.)",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "828",
                title: "R (проведение проверки документации) / A (только первую партию, затем выборочно)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "44",
                title: "1. Сертификаты качества на антикоррозионное покрытие, срок годности. 2. Состояние тары, наличие этикеток на таре, маркировка, наличие манипуляционных знаков, состояние упаковки, условия хранения.",
                date_last_check: "0",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие сведений сертификата нормативным требованиям на изготавливаемую продукцию"
              }
            ]
          },
          {
            operation_id: "18",
            group: "Входной контроль материалов и комплектующих",
            title: "Входной контроль комплектующих изделий (приборы КИПиА, средств измерений, автоматики и др.)",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "830",
                title: "V (проведение проверки или проверка выполнения технологического процесса) / A (только первую партию, затем выборочно)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "45",
                title: "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "46",
                title: "Комплектность документов (паспорт, руководство по эксплуатации, копии разрешительной документации)",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "47",
                title: "Срок поверки",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "48",
                title: "Наличие клейм и пломб",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "49",
                title: "Работоспособность оборудования, средств измерений, контроля, автоматики и автоматизации",
                date_last_check: "0",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие требованиям ссылочной документации"
              }
            ]
          },
          {
            operation_id: "19",
            group: "Определение химического состава и механических свойств стали сборочных единиц",
            title: "Химические элементы и их процентное содержание в объекте исследования",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "842",
                title: "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "50",
                title: "1. Технические условия или другой нормативный документ на объект контроля. 2. Сертификат качества объекта контроля. 3. Химические элементы в объекте исследования и их процентное содержание.",
                date_last_check: "0",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Соответствие химических элементов, их процентного содержания требованиям нормативного документа"
              }
            ]
          },
          {
            operation_id: "20",
            group: "Определение химического состава и механических свойств стали сборочных единиц",
            title: "Определение механических свойств",
            docs: "",
            discrepancy: "0",
            method: [
              {
                id: "843",
                title: "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                num: 1
              }
            ],
            features: [
              {
                feature_id: "51",
                title: "Отбор темплетов",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "52",
                title: "Изготовление образцов",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "53",
                title: "Испытательное оборудование",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "54",
                title: "Процесс испытаний",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "55",
                title: "Механические свойства",
                date_last_check: "0",
                status: "0"
              },
              {
                feature_id: "56",
                title: "Твердость",
                date_last_check: "0",
                status: "0"
              }
            ],
            criterias: [
              {
                title: "Отбор темплетов, их маркировка и т.п. выполнены в соответствии с установленными требованиями"
              },
              {
                title: "Испытательное оборудование соответствует проводимым испытаниям, исправно, аттестовано"
              },
              {
                title: "Механические свойства изделия соответствуют требованиям нормативной документации"
              }
            ],
          },
        ],
      },
      {
        "knot_id": "7",
        "knot_group_id": "4",
        "knot_number": "567",
        "knot_title": "Экран Мера",
        "knot_count": "0",
        "product_id": "257",
        "product_title": "Установка Мера-ММ 40-10-800",
        "position": "0",
        "date_last_check": "0",
        "operations": [
          {
            "operation_id": "31",
            "group": "Входной контроль материалов и комплектующих",
            "title": "Входной контроль металлопроката, отливок/поковок/заготовок",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "824",
                "title": "V (проведение проверки или проверка выполнения технологического процесса)",
                "num": 1
              },
              {
                "id": "825",
                "title": "R (проведение проверки документации) / C (100% проверка каждой единицы)",
                "num": 2
              }
            ],
            "features": [
              {
                "feature_id": "85",
                "title": "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие ГОСТ 24297-2013"
              }
            ]
          },
          {
            "operation_id": "32",
            "group": "Входной контроль материалов и комплектующих",
            "title": "Входной контроль расходных материалов (ЛКМ/АКП и тд.)",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "828",
                "title": "R (проведение проверки документации) / A (только первую партию, затем выборочно)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "86",
                "title": "1. Сертификаты качества на антикоррозионное покрытие, срок годности. 2. Состояние тары, наличие этикеток на таре, маркировка, наличие манипуляционных знаков, состояние упаковки, условия хранения.",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие сведений сертификата нормативным требованиям на изготавливаемую продукцию"
              }
            ]
          },
          {
            "operation_id": "33",
            "group": "Входной контроль материалов и комплектующих",
            "title": "Входной контроль комплектующих изделий (приборы КИПиА, средств измерений, автоматики и др.)",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "830",
                "title": "V (проведение проверки или проверка выполнения технологического процесса) / A (только первую партию, затем выборочно)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "87",
                "title": "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "88",
                "title": "Комплектность документов (паспорт, руководство по эксплуатации, копии разрешительной документации)",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "89",
                "title": "Срок поверки",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "90",
                "title": "Наличие клейм и пломб",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "91",
                "title": "Работоспособность оборудования, средств измерений, контроля, автоматики и автоматизации",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие требованиям ссылочной документации"
              }
            ]
          },
          {
            "operation_id": "34",
            "group": "Определение химического состава и механических свойств стали сборочных единиц",
            "title": "Химические элементы и их процентное содержание в объекте исследования",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "842",
                "title": "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "92",
                "title": "1. Технические условия или другой нормативный документ на объект контроля. 2. Сертификат качества объекта контроля. 3. Химические элементы в объекте исследования и их процентное содержание.",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие химических элементов, их процентного содержания требованиям нормативного документа"
              }
            ]
          },
          {
            "operation_id": "35",
            "group": "Определение химического состава и механических свойств стали сборочных единиц",
            "title": "Определение механических свойств",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "843",
                "title": "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "93",
                "title": "Отбор темплетов",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "94",
                "title": "Изготовление образцов",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "95",
                "title": "Испытательное оборудование",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "96",
                "title": "Процесс испытаний",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "97",
                "title": "Механические свойства",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "98",
                "title": "Твердость",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Отбор темплетов, их маркировка и т.п. выполнены в соответствии с установленными требованиями"
              },
              {
                "title": "Испытательное оборудование соответствует проводимым испытаниям, исправно, аттестовано"
              },
              {
                "title": "Механические свойства изделия соответствуют требованиям нормативной документации"
              }
            ]
          }
        ]
      },
      {
        "knot_id": "6",
        "knot_group_id": "3",
        "knot_number": "Но",
        "knot_title": "Соединение Мера",
        "knot_count": "0",
        "product_id": "257",
        "product_title": "Установка Мера-ММ 40-10-800",
        "position": "0",
        "date_last_check": "0",
        "operations": [
          {
            "operation_id": "26",
            "group": "Входной контроль материалов и комплектующих",
            "title": "Входной контроль металлопроката, отливок/поковок/заготовок",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "824",
                "title": "V (проведение проверки или проверка выполнения технологического процесса)",
                "num": 1
              },
              {
                "id": "825",
                "title": "R (проведение проверки документации) / C (100% проверка каждой единицы)",
                "num": 2
              }
            ],
            "features": [
              {
                "feature_id": "71",
                "title": "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие ГОСТ 24297-2013"
              }
            ]
          },
          {
            "operation_id": "27",
            "group": "Входной контроль материалов и комплектующих",
            "title": "Входной контроль расходных материалов (ЛКМ/АКП и тд.)",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "828",
                "title": "R (проведение проверки документации) / A (только первую партию, затем выборочно)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "72",
                "title": "1. Сертификаты качества на антикоррозионное покрытие, срок годности. 2. Состояние тары, наличие этикеток на таре, маркировка, наличие манипуляционных знаков, состояние упаковки, условия хранения.",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие сведений сертификата нормативным требованиям на изготавливаемую продукцию"
              }
            ]
          },
          {
            "operation_id": "28",
            "group": "Входной контроль материалов и комплектующих",
            "title": "Входной контроль комплектующих изделий (приборы КИПиА, средств измерений, автоматики и др.)",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "830",
                "title": "V (проведение проверки или проверка выполнения технологического процесса) / A (только первую партию, затем выборочно)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "73",
                "title": "1. Сопроводительная документация, удостоверяющая качество (сертификат, паспорт). 2. Содержание (полнота данных) сопроводительной документации. 3. Маркировка. 4. Маркировка тары и упаковки. 5. Геометрические размеры. 6. Состояние поверхности. 7. Марка",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "74",
                "title": "Комплектность документов (паспорт, руководство по эксплуатации, копии разрешительной документации)",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "75",
                "title": "Срок поверки",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "76",
                "title": "Наличие клейм и пломб",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "77",
                "title": "Работоспособность оборудования, средств измерений, контроля, автоматики и автоматизации",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие требованиям ссылочной документации"
              }
            ]
          },
          {
            "operation_id": "29",
            "group": "Определение химического состава и механических свойств стали сборочных единиц",
            "title": "Химические элементы и их процентное содержание в объекте исследования",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "842",
                "title": "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "78",
                "title": "1. Технические условия или другой нормативный документ на объект контроля. 2. Сертификат качества объекта контроля. 3. Химические элементы в объекте исследования и их процентное содержание.",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Соответствие химических элементов, их процентного содержания требованиям нормативного документа"
              }
            ]
          },
          {
            "operation_id": "30",
            "group": "Определение химического состава и механических свойств стали сборочных единиц",
            "title": "Определение механических свойств",
            "docs": "",
            "discrepancy": "0",
            "method": [
              {
                "id": "843",
                "title": "V (проведение проверки или проверка выполнения технологического процесса) / B1 (выборочно, не реже 1 раза в смену)",
                "num": 1
              }
            ],
            "features": [
              {
                "feature_id": "79",
                "title": "Отбор темплетов",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "80",
                "title": "Изготовление образцов",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "81",
                "title": "Испытательное оборудование",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "82",
                "title": "Процесс испытаний",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "83",
                "title": "Механические свойства",
                "date_last_check": "0",
                "status": "0"
              },
              {
                "feature_id": "84",
                "title": "Твердость",
                "date_last_check": "0",
                "status": "0"
              }
            ],
            "criterias": [
              {
                "title": "Отбор темплетов, их маркировка и т.п. выполнены в соответствии с установленными требованиями"
              },
              {
                "title": "Испытательное оборудование соответствует проводимым испытаниям, исправно, аттестовано"
              },
              {
                "title": "Механические свойства изделия соответствуют требованиям нормативной документации"
              }
            ]
          }
        ]
      },
      {
        "knot_id": "0",
        "knot_group_id": "1",
        "knot_number": "",
        "knot_title": "Крестовина Мера",
        "knot_count": "1",
        "product_id": "257",
        "product_title": "Установка Мера-ММ 40-10-800",
        "position": "0",
        "date_last_check": "0",
        "operations": []
      },
      {
        "knot_id": "0",
        "knot_group_id": "2",
        "knot_number": "",
        "knot_title": "Мера корпус",
        "knot_count": "1",
        "product_id": "257",
        "product_title": "Установка Мера-ММ 40-10-800",
        "position": "0",
        "date_last_check": "0",
        "operations": []
      },
    ],
    products: [],
    search: "",
    drawOpen: false
  },
  mail: {
    subject: "",
    text: "",
    loading: false,
    errMessage: ""
  },
  tickets: {
    ticket: {
      uid: 'bd1db483-dfea-4779-b994-cb7fe50911e1',
      subject: 'Наблюдается не стабильная работа в интерфейсе',
      userId: 102,
      adminId: 2,
      annotation: 'Здравствуйте! Сейчас на сервере ведутся технические работы. возможны перебои в работе',
      status: 3,
      unreadUser: 1,
      unreadAdmin: 1,
      isArchived: 0,
      created: 1561662880,
      updated: 1562433340
    },
    tickets: [
      {
        uid: "34008407-6e80-4327-a810-1404db074c68",
        subject: "rwewer234@",
        userId: 102,
        adminId: 0,
        annotation: "sdf3w24we",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562173446,
        updated: 1562226913
      },
      {
        uid: "586789dd-99a2-4a8f-8cdf-c028e37b30fd",
        subject: "rrew",
        userId: 102,
        adminId: 0,
        annotation: "rwer",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562190444,
        updated: 1562191306
      },
      {
        uid: "6f407fec-e03d-4e14-b130-5cd6e72e105b",
        subject: "123",
        userId: 102,
        adminId: 0,
        annotation: "123",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562165733,
        updated: 1562169469
      },
      {
        uid: "6fd74fd9-4b71-4e81-9580-d4add9ba04c1",
        subject: "ffff",
        userId: 102,
        adminId: 0,
        annotation: "ffff",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 0,
        isArchived: 0,
        created: 1562190458,
        updated: 1562190458
      },
      {
        uid: "8d3db928-52b2-4af8-a338-524d170f7b78",
        subject: "ee",
        userId: 102,
        adminId: 0,
        annotation: "eeee",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562167503,
        updated: 1562167524
      },
      {
        uid: "a4ee477f-d486-428a-a804-52a5fe567962",
        subject: "f",
        userId: 102,
        adminId: 0,
        annotation: "f",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 0,
        isArchived: 0,
        created: 1562173430,
        updated: 1562173430
      },
      {
        uid: "a5120365-ca0c-4080-9076-db43eab529e9",
        subject: "wrw",
        userId: 102,
        adminId: 0,
        annotation: "erwer",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562170307,
        updated: 1562171169
      },
      {
        uid: "bd1db383-dfea-4779-b994-cb7fe50911e1",
        subject: "Ошибка в шаблонах ППИ",
        userId: 102,
        adminId: 2,
        annotation: "А не уточните сроки?",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1561717040,
        updated: 1562153091
      },
      {
        uid: "bd1db483-dfea-4779-b994-cb7fe50911e1",
        subject: "Наблюдается не стабильная работа в интерфейсе",
        userId: 102,
        adminId: 2,
        annotation: "Здравствуйте! Сейчас на сервере ведутся технические работы. возможны перебои в работе",
        status: 1,
        unreadUser: 1,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1561662880,
        updated: 1562001329
      },
      {
        uid: "d82251ee-3397-4665-ad13-513806431780",
        subject: "f",
        userId: 102,
        adminId: 0,
        annotation: "f",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 0,
        isArchived: 0,
        created: 1562173435,
        updated: 1562173435
      },
      {
        uid: "e9c3dd4e-3696-41f6-9df8-a552e0f9e93b",
        subject: "ssss",
        userId: 102,
        adminId: 0,
        annotation: "sss",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 0,
        isArchived: 0,
        created: 1562190475,
        updated: 1562190475
      },
      {
        uid: "f138e013-2a63-4031-8f13-65cbf863fbee",
        subject: "sdf",
        userId: 102,
        adminId: 0,
        annotation: "dsfsd",
        status: 0,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562173421,
        updated: 1562190559
      }
    ],
    ticketsClosed: [
      {
        uid: "e8df5b7f-dcca-4a85-a403-b4006a6f82ac",
        subject: "dfsdf",
        userId: 102,
        adminId: 0,
        annotation: "fsdfs",
        status: 3,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562169493,
        updated: 1562170301
      },
      {
        uid: "ea82571b-cac5-47ec-aafa-ad498b4c423c",
        subject: "Тема тестовая",
        userId: 102,
        adminId: 2,
        annotation: "Что случилось друг?",
        status: 3,
        unreadUser: 0,
        unreadAdmin: 1,
        isArchived: 0,
        created: 1562068641,
        updated: 1562077488
      }
    ],
    messages: [
      {
        id: '44',
        authorId: 81,
        ticketId: 'bd1db483-dfea-4779-b994-cb7fe50911e1',
        text: 'Добрый день! Очень медленно открываются шаблоны ППИ',
        created: 1562001173,
        files: []
      },
      {
        id: '45',
        authorId: 2,
        ticketId: 'bd1db483-dfea-4779-b994-cb7fe50911e1',
        text: 'Здравствуйте! Сейчас на сервере ведутся технические работы. возможны перебои в работе',
        created: 1562001329,
        files: []
      }
    ],
    isFetch: false,
    error: null,
    isSending: false
  }
};
