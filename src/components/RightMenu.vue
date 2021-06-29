<template>
  <div>
    <q-list>
      <q-item-label header
                    class="column"
                    id="side-menu-header"
      >
        <div class="my-q-py row"
             id="div-2"
        >
          <q-item-section>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png"
                 width="100"
                 class="rounded-borders"
                 id="img"
            >
          </q-item-section>
          <q-item-section class="text-black"
                          id="q-item-section-1"
          >
            <strong>Míriam Núñez García</strong>
            <small>alu0100XXXXXX</small>
          </q-item-section>
        </div>
        <q-btn color="primary"
               label="Cerrar sesión"
               push
               size="sm"
               id="q-btn"
        ></q-btn>
      </q-item-label>

      <q-item clickable
              tag="a"
              target="_blank"
              href="https://www.ull.es/"
              id="q-item-1"
              class="q-item"
      >
        <q-item-section avatar
                        class="q-item-section"
        >
          <q-icon name="public"
                  id="q-icon-1"
          ></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label id="q-item-label-1">Página Web ULL</q-item-label>
        </q-item-section>
      </q-item>

      <q-expansion-item label="Servicios telemáticos"
                        id="q-expansion-item-1"
      >
        <q-item clickable
                tag="a"
                target="_blank"
                href="https://usuarios.ull.es/"
                id="q-item-2"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="account_box"
                    id="q-icon-2"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-2">Gestión de perfil de usuario</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://portal.ull.es/"
                id="q-item-3"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="folder_shared"
                    id="q-icon-3"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-3">Portal</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://sede.ull.es/"
                id="q-item-4"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="settings"
                    id="q-icon-4"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-4">Sede electrónica</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://www.campusvirtual.ull.es/"
                id="q-item-5"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="school"
                    id="q-icon-5"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-5">Campus virtual</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://mail.ull.edu.es/"
                id="q-item-6"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="mail_outline"
                    id="q-icon-6"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-6">Correo electrónico</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://ddv.stic.ull.es"
                id="q-item-7"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="memory"
                    id="q-icon-7"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-7">Disco duro virtual</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="https://www.ull.es/servicios/biblioteca/"
                id="q-item-8"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="menu_book"
                    id="q-icon-8"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-8">Biblioteca general</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://eventos.ull.es"
                id="q-item-9"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="today"
                    id="q-icon-9"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-9">Eventos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="http://www.stic.ull.es/info/servicios/servicios/index.asp"
                id="q-item-10"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="public"
                    id="q-icon-10"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-10">Portal de servicio</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item label="Contacto">
        <q-item clickable
                tag="a"
                target="_blank"
                href="https://www.ull.es/directorio/"
                id="q-item-11"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="phone"
                    id="q-icon-11"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-11">Directorio telefónico</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="mailto:stic@ull.es"
                id="q-item-12"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="alternate_email"
                    id="q-icon-12"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-12">stic@ull.es</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="tel:+34922319180"
                id="q-item-13"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="phone_in_talk"
                    id="q-icon-13"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-13">(+34) 922 31 91 80</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable
                tag="a"
                target="_blank"
                href="https://goo.gl/maps/3BjBb4qtP1GLd1qCA/"
                id="q-item-14"
                class="q-item"
        >
          <q-item-section avatar
                          class="q-item-section"
          >
            <q-icon name="home"
                    id="q-icon-14"
            ></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label id="q-item-label-14">Edificio Central <br> C/ Delgado Barreto s/n. 38207 <br> San Cristóbal de La Laguna</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>

    <q-footer class="flex justify-center bg-grey-2"
              id="q-footer"
    >
      <a title="Facebook ULL"
         target="_blank"
         href="https://www.facebook.com/universidaddelalaguna"
         class="q-pa-md"
         id="a-1"
      >
        <q-icon name="fab fa-facebook"
                size="sm"
                id="q-icon-15"
        ></q-icon>
      </a>
      <a title="Twitter ULL"
         target="_blank"
         href="https://twitter.com/ull"
         class="q-pa-md"
         id="a-2"
      >
        <q-icon name="fab fa-twitter"
                size="sm"
                id="q-icon-16"
        ></q-icon>
      </a>
      <a title="Youtube ULL"
         target="_blank"
         href="https://www.youtube.com/canalULL"
         class="q-pa-md"
         id="a-3"
      >
        <q-icon name="fab fa-youtube"
                size="sm"
                color="red"
                id="q-icon-17"
        ></q-icon>
      </a>
      <a title="Linkedin ULL"
         target="_blank"
         href="https://www.linkedin.com/groups/Universidad-Laguna-2656178"
         class="q-pa-md"
         id="a-4"
      >
        <q-icon name="fab fa-linkedin-in"
                size="sm"
                id="q-icon-18"
        ></q-icon>
      </a>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: 'RightMenu'
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
