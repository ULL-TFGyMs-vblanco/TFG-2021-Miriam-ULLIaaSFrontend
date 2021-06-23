<template>
  <q-drawer show-if-above
            v-model="right"
            side="right"
            elevated
  >
    <q-list>
      <q-item-label header
                    class="column"
                    id="side-menu-header"
      >
        <div class="my-q-py row">
          <q-item-section>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" width="100" class="rounded-borders">
          </q-item-section>
          <q-item-section class="text-black">
            <strong>Míriam Núñez García</strong>
            <small>alu0100XXXXXX</small>
          </q-item-section>
        </div>
        <q-btn color="primary"
               label="Cerrar sesión"
               push
               size="sm"
        ></q-btn>
      </q-item-label>

      <q-item clickable
              tag="a"
              target="_blank"
              href="https://www.ull.es/"
      >
        <q-item-section avatar>
          <q-icon name="public"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Página Web ULL</q-item-label>
        </q-item-section>
      </q-item>

      <q-expansion-item label="Servicios telemáticos">
        <q-item clickable
                tag="a"
                target="_blank"
                href="https://usuarios.ull.es/"
        >
          <q-item-section avatar>
            <q-icon name="account_box"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Gestión de perfil de usuario</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://portal.ull.es/"
        >
          <q-item-section avatar>
            <q-icon name="folder_shared"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Portal</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://sede.ull.es/"
        >
          <q-item-section avatar>
            <q-icon name="settings"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Sede electrónica</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://www.campusvirtual.ull.es/"
        >
          <q-item-section avatar>
            <q-icon name="school"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Campus virtual</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://mail.ull.edu.es/"
        >
          <q-item-section avatar>
            <q-icon name="mail_outline"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Correo electrónico</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://ddv.stic.ull.es"
        >
          <q-item-section avatar>
            <q-icon name="memory"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Disco duro virtual</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="https://www.ull.es/servicios/biblioteca/"
        >
          <q-item-section avatar>
            <q-icon name="menu_book"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Biblioteca general</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://eventos.ull.es"
        >
          <q-item-section avatar>
            <q-icon name="today"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Eventos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://www.stic.ull.es/info/servicios/servicios/index.asp"
        >
          <q-item-section avatar>
            <q-icon name="public"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Portal de servicio</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item label="Contacto">
        <q-item clickable
                tag="a"
                target="_blank"
                href="https://www.ull.es/directorio/"
        >
          <q-item-section avatar>
            <q-icon name="phone"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Directorio telefónico</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="mailto:stic@ull.es"
        >
          <q-item-section avatar>
            <q-icon name="alternate_email"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>stic@ull.es</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="tel:+34922319180"
        >
          <q-item-section avatar>
            <q-icon name="phone_in_talk"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>(+34) 922 31 91 80</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="https://goo.gl/maps/3BjBb4qtP1GLd1qCA/"
        >
          <q-item-section avatar>
            <q-icon name="home"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Edificio Central <br> C/ Delgado Barreto s/n. 38207 <br> San Cristóbal de La Laguna</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>

    <q-footer class="flex justify-center bg-grey-2">
      <a title="Facebook ULL"
         target="_blank"
         href="https://www.facebook.com/universidaddelalaguna"
         class="q-pa-md"
      >
        <q-icon name="fab fa-facebook" size="sm"></q-icon>
      </a>
      <a title="Twitter ULL"
         target="_blank"
         href="https://twitter.com/ull"
         class="q-pa-md"
      >
        <q-icon name="fab fa-twitter" size="sm"></q-icon>
      </a>
      <a title="Youtube ULL"
         target="_blank"
         href="https://www.youtube.com/canalULL"
         class="q-pa-md"
      >
        <q-icon name="fab fa-youtube" size="sm" color="red"></q-icon>
      </a>
      <a title="Linkedin ULL"
         target="_blank"
         href="https://www.linkedin.com/groups/Universidad-Laguna-2656178"
         class="q-pa-md"
      >
        <q-icon name="fab fa-linkedin-in" size="sm"></q-icon>
      </a>
    </q-footer>
  </q-drawer>
</template>

<script>
export default {
  name: 'RightMenu',

  props: {
    right: Boolean
  }
}
</script>

<style lang="sass" scoped>
$desktop-width: 1024px
$tablet-width: 768px

#side-menu-header
  background-image: url('../assets/background-profile.jpg')

.my-q-py
  margin-top: 4%
  margin-bottom: 10%

@media (min-width: #{$tablet-width})
  .my-q-py
    margin-top: 10%
</style>
