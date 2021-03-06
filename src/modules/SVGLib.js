import React from 'react';

let iconCounter = 0;

export default {
  getSVG(icon) {
    let className, ariaLabelledBy;

    iconCounter++;

    switch (icon) {
      case 'search':
        className = 'svg-icon--search';
        ariaLabelledBy = `search-icon-${iconCounter}`;
        break;
      case 'shoppingBag':
        className = 'svg-icon--shopping-bag';
        ariaLabelledBy = `shopping-bag-icon-${iconCounter}`;
        break;
      case 'wishlist':
        className = 'svg-icon--shopping-bag';
        ariaLabelledBy = `wishlist-icon-${iconCounter}`;
        break;

      case 'lens':
        className = 'svg-icon--lens';
        ariaLabelledBy = `lens-icon-${iconCounter}`;
        break;
      case 'return':
        className = 'svg-icon--return';
        ariaLabelledBy = `return-icon-${iconCounter}`;
        break;
      case 'add':
        className = 'svg-icon--add';
        ariaLabelledBy = `add-icon-${iconCounter}`;
        break;
      case 'subtract':
        className = 'svg-icon--subtract';
        ariaLabelledBy = `subtract-icon-${iconCounter}`;
        break;
      case 'remove':
        className = 'svg-icon--remove';
        ariaLabelledBy = `remove-icon-${iconCounter}`;
        break;
      case 'sale':
        className = 'svg-icon--sale';
        ariaLabelledBy = `sale-icon-${iconCounter}`;
        break;
      default:
        throw new Error('The icon passed is not in the library');
    }

    return (
      <svg
        className={`svg-icon ${className}`}
        viewBox="0 0 20 20"
        role="img"
        aria-labelledby={ariaLabelledBy}
      >
        {this[icon](ariaLabelledBy)}
      </svg>
    );
  },
  search(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Busca por Produtos</title>
        <path
          fill="none"
          d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,2.975-4.49,2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003,0-0.003,0s0,0,0,0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"
        ></path>
      </>
    );
  },
  wishlist(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Lista de Desejos</title>
        <path
          fill="none"
          d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"
        ></path>
      </>
    );
  },
  lens(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Lupa</title>
        <path d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"></path>
      </>
    );
  },
  shoppingBag(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Bolsa de Compras</title>
        <path
          fill="none"
          d="M17.696,9.368H2.305c-0.189,0-0.367,0.092-0.478,0.245c-0.11,0.155-0.141,0.352-0.08,0.532l2.334,6.918c0.081,0.238,0.305,0.4,0.556,0.4h10.735c0.253,0,0.478-0.162,0.557-0.402l2.323-6.917c0.062-0.179,0.03-0.376-0.079-0.531C18.062,9.459,17.886,9.368,17.696,9.368z M14.95,16.287H5.062l-1.938-5.743h13.753L14.95,16.287z"
        ></path>
        <path
          fill="none"
          d="M6.345,7.369c0.325,0,0.588-0.263,0.588-0.588c0-1.691,1.376-3.067,3.067-3.067c1.691,0,3.067,1.376,3.067,3.067c0,0.325,0.264,0.588,0.588,0.588c0.326,0,0.589-0.263,0.589-0.588c0-2.34-1.904-4.243-4.244-4.243c-2.34,0-4.244,1.903-4.244,4.243C5.757,7.106,6.02,7.369,6.345,7.369z"
        ></path>
      </>
    );
  },
  return(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Fechar Painel Lateral</title>
        <path
          fill="none"
          d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
        ></path>
      </>
    );
  },
  add(ariaLabelledby) {
    return (
      <>
        <title id={ariaLabelledby}>Adicionar uma peça</title>
        <path
          fill="none"
          d="M7.93,4.509H9.62v1.689c0,0.233,0.189,0.422,0.422,0.422s0.422-0.189,0.422-0.422V4.509h1.689c0.233,0,0.423-0.189,0.423-0.422s-0.189-0.422-0.423-0.422h-1.689V1.975c0-0.233-0.189-0.422-0.422-0.422S9.62,1.742,9.62,1.975v1.689H7.93c-0.233,0-0.422,0.189-0.422,0.422S7.697,4.509,7.93,4.509 M18.489,8.311H1.595c-0.466,0-0.845,0.378-0.845,0.845V10c0,0.466,0.378,0.845,0.845,0.845h0.169l1.533,7.282l0.007-0.001c0.046,0.183,0.205,0.321,0.402,0.321h12.67c0.198,0,0.356-0.139,0.403-0.321l0.007,0.001l1.533-7.282h0.169c0.466,0,0.845-0.379,0.845-0.845V9.155C19.334,8.689,18.955,8.311,18.489,8.311 M2.626,10.845H5.53l0.266,1.689H2.982L2.626,10.845z M3.16,13.379h2.769l0.267,1.689H3.515L3.16,13.379z M4.049,17.603l-0.355-1.689h2.636l0.267,1.689H4.049z M9.62,17.603H7.441l-0.267-1.689H9.62V17.603z M9.62,15.068H7.041l-0.267-1.689H9.62V15.068z M9.62,12.534H6.641l-0.266-1.689H9.62V12.534z M12.644,17.603h-2.179v-1.689h2.446L12.644,17.603zM13.043,15.068h-2.579v-1.689h2.845L13.043,15.068z M10.464,12.534v-1.689h3.245l-0.266,1.689H10.464z M16.035,17.603h-2.548l0.268-1.689h2.636L16.035,17.603z M16.569,15.068h-2.682l0.267-1.689h2.77L16.569,15.068z M17.103,12.534h-2.814l0.267-1.689h2.903L17.103,12.534z M18.489,10H1.595V9.155h16.895V10z"
        ></path>
      </>
    );
  },
  subtract(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Retirar uma peça</title>
        <path
          fill="none"
          d="M7.836,2.722h4.389c0.242,0,0.439-0.196,0.439-0.439s-0.197-0.439-0.439-0.439H7.836c-0.242,0-0.438,0.196-0.438,0.439S7.595,2.722,7.836,2.722 M18.81,6.672H1.253c-0.484,0-0.878,0.394-0.878,0.878v0.878c0,0.485,0.394,0.877,0.878,0.877h0.176l1.593,7.569l0.008-0.003c0.048,0.191,0.213,0.335,0.418,0.335h13.168c0.205,0,0.369-0.144,0.418-0.335l0.008,0.003l1.593-7.569h0.176c0.484,0,0.878-0.393,0.878-0.877V7.55C19.688,7.065,19.294,6.672,18.81,6.672 M2.325,9.305h3.017l0.277,1.756H2.694L2.325,9.305z M2.879,11.939h2.878l0.277,1.755H3.249L2.879,11.939z M3.803,16.328l-0.369-1.756h2.739l0.277,1.756H3.803z M9.592,16.328H7.328l-0.277-1.756h2.542V16.328z M9.592,13.694h-2.68l-0.277-1.755h2.957V13.694z M9.592,11.062H6.497L6.22,9.305h3.373V11.062z M12.734,16.328H10.47v-1.756h2.542L12.734,16.328zM13.15,13.694h-2.68v-1.755h2.957L13.15,13.694z M10.47,11.062V9.305h3.373l-0.277,1.756H10.47z M16.259,16.328h-2.646l0.277-1.756h2.739L16.259,16.328z M16.813,13.694h-2.785l0.276-1.755h2.878L16.813,13.694z M17.368,11.062h-2.925l0.277-1.756h3.018L17.368,11.062z M18.81,8.428H1.253V7.55H18.81V8.428z"
        ></path>
      </>
    );
  },
  remove(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Remover o produto da sacola</title>
        <path
          fill="none"
          d="M7.083,8.25H5.917v7h1.167V8.25z M18.75,3h-5.834V1.25c0-0.323-0.262-0.583-0.582-0.583H7.667
								c-0.322,0-0.583,0.261-0.583,0.583V3H1.25C0.928,3,0.667,3.261,0.667,3.583c0,0.323,0.261,0.583,0.583,0.583h1.167v14
								c0,0.644,0.522,1.166,1.167,1.166h12.833c0.645,0,1.168-0.522,1.168-1.166v-14h1.166c0.322,0,0.584-0.261,0.584-0.583
								C19.334,3.261,19.072,3,18.75,3z M8.25,1.833h3.5V3h-3.5V1.833z M16.416,17.584c0,0.322-0.262,0.583-0.582,0.583H4.167
								c-0.322,0-0.583-0.261-0.583-0.583V4.167h12.833V17.584z M14.084,8.25h-1.168v7h1.168V8.25z M10.583,7.083H9.417v8.167h1.167V7.083
								z"
        ></path>
      </>
    );
  },
  sale(ariaLabelledBy) {
    return (
      <>
        <title id={ariaLabelledBy}>Produto em promoção</title>
        <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
      </>
    );
  },
};
