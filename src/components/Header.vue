<template>
  <div class="header">
    <q-header height-hint="98">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="flex center">
          <img src="../assets/marca-ull-positivo.svg" alt="Logo ULL" width="110">
        </q-toolbar-title>
        <q-btn dense
               flat
               round
               icon="menu"
               @click="right = !right"
        ></q-btn>
      </q-toolbar>

      <q-toolbar class="bg-blue-grey-2 text-black">
        <q-space></q-space>
        <div class="text-caption text-weight-medium">Panel de máquinas virtuales en el IaaS</div>
        <q-space></q-space>
        <q-btn type="a"
               target="_blank"
               href="https://iaas.ull.es/"
               class="bg-white"
        >
          <img src="../assets/ovirt.png" width="50">
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above
              v-model="right"
              side="right"
              bordered
    >
      <q-list>
        <q-item-label header
                      class="justify-content-center"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Image avatar</q-item-section>
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
            <q-icon name="school"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Página Web ULL</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable
                tag="a"
                target="_blank"
                href="https://usuarios.ull.es/"
        >
          <q-item-section avatar>
            <q-icon name="school"></q-icon>
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
            <q-icon name="school"></q-icon>
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
            <q-icon name="school"></q-icon>
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
                href="http://ull.edu.es/"
        >
          <q-item-section avatar>
            <q-icon name="school"></q-icon>
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
            <q-icon name="school"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Disco duro virtual</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable
                tag="a"
                target="_blank"
                href="http://www.bbtk.ull.es/view/institucional/bbtk/Biblioteca_Digital/es"
        >
          <q-item-section avatar>
            <q-icon name="school"></q-icon>
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
            <q-icon name="school"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Eventos</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-btn-dropdown label="Soporte">
        <q-list>
          <q-item clickable
                  tag="a"
                  target="_blank"
                  href="http://www.stic.ull.es/info/servicios/servicios/index.asp"
          >
            <q-item-section avatar>
              <q-icon name="school"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>Portal de servicio</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list>
          <q-item clickable
                  tag="a"
                  target="_blank"
                  href="mailto:stic@ull.es"
          >
            <q-item-section avatar>
              <q-icon name="school"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>stic@ull.es</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list>
          <q-item tag="p">
            <q-item-section avatar>
              <q-icon name="school"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>(+34) 922 31 9180</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list>
          <q-item tag="p">
            <q-item-section avatar>
              <q-icon name="school"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>Edificio Central <br> C/ Delgado Barreto s/n. 38207 <br>San Cristóbal de La Laguna</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      right: false
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
