<template>
  <body>
    <header>
      <div class="logo">
        <img src="src/assets/logo-art.webp" width="98px" height="98px" />
      </div>
      <div class="mapping menu">
        <ul>
          <li><a href="#">App ឆ្នោតខ្មែរ</a></li>
          <li>លទ្ធផលឆ្នោតខ្មែរ</li>
          <li>អំពីយើង</li>
          <li>របៀបផ្សេងសំណាង</li>
        </ul>
      </div>
      <div style="clear: both"></div>
    </header>
    <div class="table">
      <form>
        <h1 style="text-align: center">លទ្ធផលឆ្នោតខ្មែរ</h1>
        <table>
          <tr>
            <th>ស្វែងរកលទ្ធផលតាមថ្ងៃ</th>
            <th>2025-12-03</th>
            <th>ស្វែងរក</th>
          </tr>

          <tr>
            <td colspan="5" style="text-align: center">ថ្ងៃចេញឆ្នោត</td>
          </tr>
          <tr>
            <td colspan="5" style="text-align: center">2025-12-03</td>
          </tr>
          <tr>
            <th style="text-align: center">ម៉ោងចេញឆ្នោត</th>
            <th>រង្វាន់ទី១</th>
            <th>រង្វាន់ទី២</th>
            <th>រង្វាន់ទី៣</th>
            <th>រង្វានទី៤</th>
          </tr>
          <tr>
            <td>19:45:00</td>
            <td>81717</td>
            <td>76195</td>
            <td>64207</td>
            <td>10687</td>
          </tr>
          <tr>
            <td>18:00:00</td>
            <td>29104</td>
            <td>33267</td>
            <td>71484</td>
            <td>51185</td>
          </tr>
          <tr>
            <td>15:45:00</td>
            <td>84928</td>
            <td>81824</td>
            <td>76866</td>
            <td>12921</td>
          </tr>
          <tr>
            <td>13:00:00</td>
            <td>25091</td>
            <td>09328</td>
            <td>03385</td>
            <td>64826</td>
          </tr>
          <tr>
            <td>10:35:00</td>
            <td>71408</td>
            <td>63417</td>
            <td>99566</td>
            <td>35351</td>
          </tr>
        </table>
      </form>
    </div>
  </body>
  <style>
    table {
      background-color: white;
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    td,
    th {
      border: 1px solid #dddddd;
      padding: 8px;
      text-align: center;
    }
    .logo {
      float: left;
    }
    header {
      border-bottom: 1px solid #ccc;
      box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .menu {
      float: right;
    }
    .mapping ul li {
      display: inline;
      margin: 4px 20px;
    }
    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
</template>

<script setup></script>
